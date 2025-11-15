#!/usr/bin/env python3
"""
publish_to_buttondown.py

Creates a Buttondown draft (or schedules) from a newsletter markdown file.
- Uses Buttondown API v1: POST https://api.buttondown.com/v1/emails
- Requires env: BUTTONDOWN_API_KEY
- Frontmatter keys (optional): title, status (draft|scheduled), publish_date (ISO8601), subject_prefix
"""

import os, sys, yaml, markdown, requests, json
from pathlib import Path
from datetime import datetime

BASE = "https://api.buttondown.com/v1/emails"
API_KEY = os.getenv("BUTTONDOWN_API_KEY")
DEFAULT_SUBJECT_PREFIX = os.getenv("BUTTONDOWN_SUBJECT_PREFIX", "")
DEFAULT_STATUS = os.getenv("BUTTONDOWN_DEFAULT_STATUS", "draft")  # draft|scheduled
DEFAULT_FOOTER = os.getenv("BUTTONDOWN_DEFAULT_FOOTER", "\n\n---\nIf you'd like to unsubscribe: {{ unsubscribe_link }}")

HEADERS = {"Authorization": f"Token {API_KEY}", "Content-Type": "application/json"}

def read_file(path):
    return Path(path).read_text(encoding="utf8")

def parse_frontmatter(text):
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            return yaml.safe_load(parts[1]) or {}, parts[2]
    return {}, text

def build_payload(src_path):
    raw = read_file(src_path)
    fm, body_md = parse_frontmatter(raw)
    # subject: frontmatter title or first H1 or fallback to filename
    title = fm.get("title")
    if not title:
        # find first markdown heading
        for line in body_md.splitlines():
            if line.strip().startswith("#"):
                title = line.strip().lstrip("#").strip()
                break
    if not title:
        title = Path(src_path).stem

    subject_prefix = fm.get("subject_prefix", DEFAULT_SUBJECT_PREFIX)
    subject = f"{subject_prefix}{title}"

    status = fm.get("status", DEFAULT_STATUS)
    publish_date = fm.get("publish_date")  # e.g., "2025-11-21T10:00:00Z"

    body = markdown.markdown(body_md) + DEFAULT_FOOTER

    payload = {"subject": subject, "body": body, "status": status}
    if status == "scheduled":
        if not publish_date:
            raise SystemExit("scheduled status requires publish_date in frontmatter (ISO8601)")
        payload["publish_date"] = publish_date

    return payload

def create_buttondown_email(payload):
    r = requests.post(BASE, headers=HEADERS, json=payload, timeout=30)
    try:
        r.raise_for_status()
    except requests.exceptions.HTTPError as e:
        print("BUTTONDOWN_API_ERROR", r.status_code, r.text, file=sys.stderr)
        raise
    return r.json()

def main():
    if len(sys.argv) < 2:
        print("usage: publish_to_buttondown.py path/to/file.md", file=sys.stderr)
        sys.exit(1)
    if not API_KEY:
        print("Missing BUTTONDOWN_API_KEY (set as repo secret)", file=sys.stderr)
        sys.exit(2)

    src = sys.argv[1]
    if not Path(src).exists():
        print(f"File not found: {src}", file=sys.stderr); sys.exit(3)

    payload = build_payload(src)
    resp = create_buttondown_email(payload)
    print(json.dumps(resp, indent=2))

if __name__ == "__main__":
    main()
