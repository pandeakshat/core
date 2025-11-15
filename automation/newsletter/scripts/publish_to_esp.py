#!/usr/bin/env python3
import os, sys, markdown, requests, yaml, json

API_KEY = os.getenv("MAILERLITE_API_KEY")
BASE = "https://api.mailerlite.com/api/v2"

def render_html(md_path):
    md = open(md_path, encoding="utf8").read()
    if md.startswith("---"):
        parts = md.split("---")
        body = "".join(parts[2:]) if len(parts) > 2 else ""
    else:
        body = md
    return markdown.markdown(body)

def read_meta(md_path):
    txt = open(md_path, encoding="utf8").read()
    if txt.startswith("---"):
        parts = txt.split("---")
        if len(parts) >= 3:
            return yaml.safe_load(parts[1])
    return {}

def create_campaign(title, html):
    headers = {
        "X-MailerLite-ApiKey": API_KEY,
        "Content-Type": "application/json"
    }
    payload = {
        "subject": title,
        "from": {"name": "Your Name", "email": "no-reply@example.com"},
        "type": "regular",
        "html": html
    }
    r = requests.post(f"{BASE}/campaigns", json=payload, headers=headers)
    r.raise_for_status()
    return r.json()

def main():
    if len(sys.argv) < 2:
        print("usage: publish_to_esp.py path/to/file.md")
        sys.exit(1)

    path = sys.argv[1]
    if not API_KEY:
        print("Missing MAILERLITE_API_KEY", file=sys.stderr)
        sys.exit(2)

    meta = read_meta(path)
    title = meta.get("title", "Newsletter")
    html = render_html(path)

    resp = create_campaign(title, html)
    print(json.dumps(resp))

if __name__ == "__main__":
    main()
