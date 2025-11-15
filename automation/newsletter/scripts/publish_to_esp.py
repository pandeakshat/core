#!/usr/bin/env python3
"""
publish_to_esp.py

Minimal, robust MailerLite v2 campaign creator:
- Reads a newsletter markdown file
- Builds subject (prefix + frontmatter title)
- Converts Markdown -> HTML, injects footer with unsubscribe token
- Creates a MailerLite campaign (v2 API) targeted to a group
- Uploads HTML content to the campaign

Configuration precedence:
1) Frontmatter overrides (frontmatter keys: title, from_email, from_name, group_id, subject_prefix)
2) Environment variables (MAILERLITE_*)
3) Defaults in this file
"""

from pathlib import Path
import os, sys, yaml, markdown, requests, json, re

# --------------------
# DEFAULTS (safe to hardcode)
# --------------------
DEFAULT_FROM_EMAIL = "newsletter@pandeakshat.com"
DEFAULT_FROM_NAME = "Akshat Pande"
DEFAULT_GROUP_ID = 171126496252921482
DEFAULT_SUBJECT_PREFIX = "PandeAkshat — "
DEFAULT_FOOTER_HTML = """
<br><br>
<hr>
<p style="font-size:12px;color:#666;">
If you no longer want these emails, <a href="{{ $unsubscribe }}">unsubscribe here</a>.
</p>
"""

# --------------------
# ENV overrides / secrets
# (set these as GitHub repo secrets and the workflow must pass them)
# --------------------
API_KEY = os.getenv("MAILERLITE_API_KEY")
GROUP_ID = int(os.getenv("MAILERLITE_GROUP_ID", str(DEFAULT_GROUP_ID)))
FROM_EMAIL = os.getenv("MAILERLITE_FROM_EMAIL", DEFAULT_FROM_EMAIL)
FROM_NAME = os.getenv("MAILERLITE_FROM_NAME", DEFAULT_FROM_NAME)
SUBJECT_PREFIX_ENV = os.getenv("MAILERLITE_SUBJECT_PREFIX", DEFAULT_SUBJECT_PREFIX)
# v2 API base
BASE = "https://api.mailerlite.com/api/v2"
HEADERS = {
    "X-MailerLite-ApiKey": API_KEY,
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# --------------------
# Helpers
# --------------------
def read_file(path):
    return Path(path).read_text(encoding="utf8")

def read_frontmatter(src_text):
    """Return dict of frontmatter (or {})."""
    if src_text.startswith("---"):
        parts = src_text.split("---", 2)
        if len(parts) >= 3:
            try:
                fm = yaml.safe_load(parts[1]) or {}
                return fm
            except Exception:
                return {}
    return {}

def render_html(md_path, footer_html):
    txt = read_file(md_path)
    # strip frontmatter
    if txt.startswith("---"):
        parts = txt.split("---", 2)
        body = parts[2] if len(parts) >= 3 else ""
    else:
        body = txt
    # convert markdown -> html
    html_body = markdown.markdown(body)
    # sanitize trivial stray script tags (defensive)
    html_body = re.sub(r"<\s*script.*?>.*?<\s*/\s*script\s*>", "", html_body, flags=re.I|re.S)
    full = f"""<html><head><meta charset="utf-8"></head><body>{html_body}{footer_html}</body></html>"""
    return full

def create_campaign(subject, from_email, from_name, group_id):
    payload = {
        "subject": subject,
        "type": "regular",
        "groups": [int(group_id)],
        "from": {"email": from_email, "name": from_name}
    }
    r = requests.post(f"{BASE}/campaigns", json=payload, headers=HEADERS)
    if r.status_code >= 400:
        print("CREATE_CAMPAIGN_ERROR", r.status_code, r.text, file=sys.stderr)
        r.raise_for_status()
    return r.json()

def upload_content(campaign_id, html):
    payload = {"html": html}
    r = requests.put(f"{BASE}/campaigns/{campaign_id}/content", json=payload, headers=HEADERS)
    if r.status_code >= 400:
        print("UPLOAD_CONTENT_ERROR", r.status_code, r.text, file=sys.stderr)
        r.raise_for_status()
    return r.json()

# --------------------
# Main
# --------------------
def main():
    if len(sys.argv) < 2:
        print("usage: publish_to_esp.py path/to/newsletter.md", file=sys.stderr)
        sys.exit(1)

    if not API_KEY:
        print("Missing MAILERLITE_API_KEY (set as repo secret)", file=sys.stderr)
        sys.exit(2)

    src = sys.argv[1]
    if not Path(src).exists():
        print(f"File not found: {src}", file=sys.stderr)
        sys.exit(3)

    raw = read_file(src)
    fm = read_frontmatter(raw)

    # apply precedence: frontmatter -> env -> defaults
    title = fm.get("title") or "Newsletter"
    subject_prefix = fm.get("subject_prefix", SUBJECT_PREFIX_ENV)
    subject = f"{subject_prefix}{title}"

    from_email = fm.get("from_email", FROM_EMAIL)
    from_name = fm.get("from_name", FROM_NAME)
    group_id = int(fm.get("group_id", GROUP_ID))

    # basic validation
    if "@" not in from_email or "." not in from_email.split("@")[-1]:
        print(f"INVALID_FROM_EMAIL: {from_email}", file=sys.stderr); sys.exit(4)
    if not from_name or len(from_name) < 2:
        print(f"INVALID_FROM_NAME: {from_name}", file=sys.stderr); sys.exit(5)
    if not group_id or int(group_id) == 0:
        print(f"INVALID_GROUP_ID: {group_id}", file=sys.stderr); sys.exit(6)

    html = render_html(src, DEFAULT_FOOTER_HTML)

    # create campaign (v2)
    camp = create_campaign(subject, from_email, from_name, group_id)
    # extract campaign id (v2 returns id)
    camp_id = camp.get("id") or (camp.get("data") or {}).get("id")
    if not camp_id:
        print("NO_CAMPAIGN_ID_RETURNED", camp, file=sys.stderr)
        sys.exit(7)

    # upload content
    upload_resp = upload_content(camp_id, html)

    out = {
        "campaign": camp,
        "upload": upload_resp
    }
    print(json.dumps(out, indent=2))

if __name__ == "__main__":
    main()
