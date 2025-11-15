#!/usr/bin/env python3
import os, sys, markdown, requests, yaml, json
API_KEY = os.getenv("MAILERLITE_API_KEY")
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
    # Wrap in minimal HTML with unsubscribe token required by MailerLite
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

def create_campaign(title, from_name, from_email):
    payload = {
        "subject": title,
        "from": {"name": from_name, "email": from_email},
        "type": "regular"
    }
    r = requests.post(f"{BASE}/campaigns", json=payload, headers=HEADERS)
    if r.status_code >= 400:
        print("CREATE_CAMPAIGN_ERROR", r.status_code, r.text, file=sys.stderr)
        r.raise_for_status()
    return r.json()

def upload_content(campaign_id, html):
    # MailerLite expects full HTML with <head> and <body> and an unsubscribe token
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

    path = sys.argv[1]
    meta = read_meta(path)
    title = meta.get("title", "Newsletter")
    from_name = meta.get("from_name", "Your Name")
    # IMPORTANT: set this to an email that MailerLite has verified for your account
    from_email = meta.get("from_email", os.getenv("MAILERLITE_FROM_EMAIL", "no-reply@your-verified-domain.com"))

    html = render_html(path)

    # Step 1: create campaign
    camp = create_campaign(title, from_name, from_email)
    camp_id = camp.get("id") or camp.get("data", {}).get("id") or camp.get("campaign", {}).get("id")
    if not camp_id:
        print("NO_CAMPAIGN_ID_RETURNED", camp, file=sys.stderr); sys.exit(3)

    # Step 2: upload content
    upload_resp = upload_content(camp_id, html)
    print(json.dumps({"campaign": camp, "upload": upload_resp}))

if __name__ == "__main__":
    main()
