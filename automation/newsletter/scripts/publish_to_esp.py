#!/usr/bin/env python3
"""
Buttondown publisher with status normalization + validation.
"""
import os, sys, yaml, markdown, requests, json
from pathlib import Path
from datetime import datetime

BASE = "https://api.buttondown.com/v1/emails"
API_KEY = os.getenv("BUTTONDOWN_API_KEY")
DEFAULT_SUBJECT_PREFIX = os.getenv("BUTTONDOWN_SUBJECT_PREFIX", "")
DEFAULT_STATUS = os.getenv("BUTTONDOWN_DEFAULT_STATUS", "draft")
DEFAULT_FOOTER = os.getenv("BUTTONDOWN_DEFAULT_FOOTER", "\n\n---\nIf you'd like to unsubscribe: {{ unsubscribe_link }}")
HEADERS = {"Authorization": f"Token {API_KEY}", "Content-Type": "application/json"}

# Permitted enum values (from Buttondown error)
PERMITTED_STATUSES = {
    "draft","managed_by_rss","about_to_send","scheduled","in_flight","paused",
    "deleted","errored","sent","imported","throttled","resending","transactional","suppressed"
}

def read_file(path):
    return Path(path).read_text(encoding="utf8")

def parse_frontmatter(text):
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            return yaml.safe_load(parts[1]) or {}, parts[2]
    return {}, text

def normalize_status(s):
    if not s:
        return DEFAULT_STATUS
    s = str(s).strip().lower()
    # common aliases -> map to permitted values
    alias_map = {
        "publish":"about_to_send",   # if you want to trigger send
        "send":"about_to_send",
        "scheduled":"scheduled",
        "draft":"draft",
        "rss":"managed_by_rss"
    }
    if s in alias_map:
        return alias_map[s]
    # if user provided a permitted value already, keep it
    if s in PERMITTED_STATUSES:
        return s
    # last-resort: return DEFAULT_STATUS
    return DEFAULT_STATUS

def build_payload(src_path):
    raw = read_file(src_path)
    fm, body_md = parse_frontmatter(raw)
    # subject resolution
    title = fm.get("title")
    if not title:
        for line in body_md.splitlines():
            if line.strip().startswith("#"):
                title = line.strip().lstrip("#").strip()
                break
    if not title:
        title = Path(src_path).stem

    subject_prefix = fm.get("subject_prefix", DEFAULT_SUBJECT_PREFIX)
    subject = f"{subject_prefix}{title}"

    requested_status = fm.get("status", DEFAULT_STATUS)
    status = normalize_status(requested_status)
    if status not in PERMITTED_STATUSES:
        raise SystemExit(f"INVALID_STATUS_AFTER_NORMALIZATION: '{requested_status}' -> '{status}'. Permitted: {sorted(list(PERMITTED_STATUSES))}")

    payload = {"subject": subject, "body": markdown.markdown(body_md) + DEFAULT_FOOTER, "status": status}

    if status == "scheduled":
        publish_date = fm.get("publish_date") or fm.get("publish_at")
        if not publish_date:
            raise SystemExit("scheduled status requires publish_date in frontmatter (ISO8601)")
        # Buttondown expects ISO8601 string — no conversion here (assume user sets correct format)
        payload["publish_date"] = publish_date

    return payload

def create_buttondown_email(payload):
    r = requests.post(BASE, headers=HEADERS, json=payload, timeout=30)
    try:
        r.raise_for_status()
    except requests.exceptions.HTTPError:
        # print full body for debugging
        print("BUTTONDOWN_API_ERROR", r.status_code, r.text, file=sys.stderr)
        raise
    return r.json()

def main():
    if len(sys.argv) < 2:
        print("usage: publish_to_esp.py path/to/file.md", file=sys.stderr); sys.exit(1)
    if not API_KEY:
        print("Missing BUTTONDOWN_API_KEY (set as repo secret)", file=sys.stderr); sys.exit(2)

    src = sys.argv[1]
    if not Path(src).exists():
        print(f"File not found: {src}", file=sys.stderr); sys.exit(3)

    payload = build_payload(src)
    print("DEBUG: payload.status =", payload.get("status"), file=sys.stderr)
    resp = create_buttondown_email(payload)
    print(json.dumps(resp, indent=2))

if __name__ == "__main__":
    main()
