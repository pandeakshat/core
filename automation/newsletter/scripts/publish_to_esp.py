#!/usr/bin/env python3
import os, sys, markdown, requests, yaml, json

API_KEY = os.getenv("MAILERLITE_API_KEY")
GROUP_ID = os.getenv("MAILERLITE_GROUP_ID")
FROM_EMAIL = os.getenv("MAILERLITE_FROM_EMAIL")
FROM_NAME = os.getenv("MAILERLITE_FROM_NAME", "").strip()
BASE = "https://api.mailerlite.com/api/v2"
HEADERS = {"X-MailerLite-ApiKey": API_KEY, "Content-Type": "application/json", "Accept":"application/json"}

def render_html(md_path):
    md = open(md_path, encoding="utf8").read()
    if md.startswith("---"):
        parts = md.split("---")
        body = "".join(parts[2:]) if len(parts) > 2 else ""
    else:
        body = md
    html_body = markdown.markdown(body)
    full_html = f"""<html><head><title></title></head><body>{html_body}
    <p><small><a href="{{{{ $unsubscribe }}}}">Unsubscribe</a></small></p>
    </body></html>"""
    return full_html

def read_meta(md_path):
    txt = open(md_path, encoding="utf8").read()
    if txt.startswith("---"):
        parts = txt.split("---")
        if len(parts) >= 3:
            return yaml.safe_load(parts[1])
    return {}

def create_campaign(title, from_name, from_email, group_id):
    # include emails[0].subject which MailerLite examples use
    payload = {
        "name": title,
        "subject": title,
        "type": "regular",
        "groups": [int(group_id)],
        "emails": [
            {
                "subject": title,
                "from_name": from_name,
                "from": from_email
            }
        ]
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

def main():
    if len(sys.argv) < 2:
        print("usage: publish_to_esp.py path/to/file.md")
        sys.exit(1)
    if not API_KEY:
        print("Missing MAILERLITE_API_KEY", file=sys.stderr); sys.exit(2)
    if not GROUP_ID:
        print("Missing MAILERLITE_GROUP_ID", file=sys.stderr); sys.exit(3)
    if not FROM_EMAIL:
        print("Missing MAILERLITE_FROM_EMAIL (set as repo secret)", file=sys.stderr); sys.exit(4)
    if not FROM_NAME:
        print("Missing MAILERLITE_FROM_NAME (set as repo secret)", file=sys.stderr); sys.exit(5)

    path = sys.argv[1]
    meta = read_meta(path)
    title = meta.get("title", "Newsletter")
    # allow per-post override if present in frontmatter
    from_name = meta.get("from_name", FROM_NAME).strip()
    from_email = meta.get("from_email", FROM_EMAIL).strip()

    # sanity checks
    if "@" not in from_email or "." not in from_email.split("@")[-1]:
        print("INVALID_FROM_EMAIL", from_email, file=sys.stderr); sys.exit(6)
    if not from_name:
        print("INVALID_FROM_NAME", from_name, file=sys.stderr); sys.exit(7)

    html = render_html(path)

    camp = create_campaign(title, from_name, from_email, GROUP_ID)
    # many possible shapes — try common keys
    camp_id = camp.get("id") or camp.get("data", {}).get("id") or (camp.get("campaign") or {}).get("id")
    if not camp_id:
        print("NO_CAMPAIGN_ID_RETURNED", camp, file=sys.stderr); sys.exit(8)

    upload_resp = upload_content(camp_id, html)
    print(json.dumps({"campaign": camp, "upload": upload_resp}))

if __name__ == "__main__":
    main()
