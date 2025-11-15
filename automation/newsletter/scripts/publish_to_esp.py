#!/usr/bin/env python3
import os, sys, markdown, requests, yaml, json

# --- CONFIGURATION ---
# You can hardcode non-sensitive defaults here if desired:
# (But keeping them as env vars is better practice)
DEFAULT_FROM_EMAIL = "newsletter@pandeakshat.com"  # CHANGE THIS
DEFAULT_FROM_NAME = "Akshat Pande"        # CHANGE THIS
DEFAULT_GROUP_ID = "171126496252921482"                     # CHANGE THIS

API_KEY = os.getenv("MAILERLITE_API_KEY")  # Keep this as secret!
GROUP_ID = os.getenv("MAILERLITE_GROUP_ID", DEFAULT_GROUP_ID)
FROM_EMAIL = os.getenv("MAILERLITE_FROM_EMAIL", DEFAULT_FROM_EMAIL)
FROM_NAME = os.getenv("MAILERLITE_FROM_NAME", DEFAULT_FROM_NAME).strip()

# NEW MailerLite API endpoint
BASE = "https://connect.mailerlite.com/api"
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

def render_html(md_path):
    with open(md_path, encoding="utf8") as f:
        md = f.read()
    
    if md.startswith("---"):
        parts = md.split("---", 2)
        body = parts[2] if len(parts) >= 3 else md
    else:
        body = md
        
    html_body = markdown.markdown(body)
    return f"""<html>
<head><meta charset="UTF-8"><title></title></head>
<body>
{html_body}
<p><small><a href="{{{{ $unsubscribe }}}}">Unsubscribe</a></small></p>
</body>
</html>"""

def read_meta(md_path):
    with open(md_path, encoding="utf8") as f:
        txt = f.read()
    if txt.startswith("---"):
        parts = txt.split("---", 2)
        if len(parts) >= 3:
            return yaml.safe_load(parts[1])
    return {}

def create_campaign(title, from_name, from_email, group_id):
    # CORRECT payload for NEW MailerLite API
    payload = {
        "name": title,
        "type": "regular",
        "subject": title,
        "from": {
            "email": from_email,
            "name": from_name
        },
        "to": [
            {
                "id": str(group_id),
                "type": "group"
            }
        ]
    }
    
    print(f"DEBUG: Sending payload: {json.dumps(payload, indent=2)}", file=sys.stderr)
    
    response = requests.post(f"{BASE}/campaigns", json=payload, headers=HEADERS)
    print(f"DEBUG: Response status: {response.status_code}", file=sys.stderr)
    print(f"DEBUG: Response body: {response.text}", file=sys.stderr)
    
    if response.status_code >= 400:
        print("CREATE_CAMPAIGN_ERROR", response.status_code, response.text, file=sys.stderr)
        response.raise_for_status()
        
    return response.json()

def upload_content(campaign_id, html):
    payload = {"html": html}
    response = requests.put(f"{BASE}/campaigns/{campaign_id}/content", json=payload, headers=HEADERS)
    if response.status_code >= 400:
        print("UPLOAD_CONTENT_ERROR", response.status_code, response.text, file=sys.stderr)
        response.raise_for_status()
    return response.json()

def main():
    if len(sys.argv) < 2:
        print("usage: publish_to_esp.py path/to/file.md")
        sys.exit(1)
    
    # --- VALIDATION ---
    if not API_KEY:
        print("❌ Missing MAILERLITE_API_KEY (required as secret)", file=sys.stderr)
        sys.exit(2)
    
    if not GROUP_ID or GROUP_ID == "0":
        print(f"❌ Invalid GROUP_ID: {GROUP_ID}", file=sys.stderr)
        sys.exit(3)
    
    if not FROM_EMAIL or "@" not in FROM_EMAIL:
        print(f"❌ Invalid FROM_EMAIL: {FROM_EMAIL}", file=sys.stderr)
        sys.exit(4)
    
    if not FROM_NAME or len(FROM_NAME) < 2:
        print(f"❌ Invalid FROM_NAME: {FROM_NAME}", file=sys.stderr)
        sys.exit(5)

    # --- PROCESS NEWSLETTER ---
    path = sys.argv[1]
    meta = read_meta(path)
    title = meta.get("title", "Newsletter").strip()
    
    # Use frontmatter values if present, otherwise use env vars/defaults
    from_name = meta.get("from_name", FROM_NAME).strip()
    from_email = meta.get("from_email", FROM_EMAIL).strip()

    html = render_html(path)
    camp = create_campaign(title, from_name, from_email, GROUP_ID)
    
    # Extract campaign ID
    camp_id = camp.get("id") or camp.get("data", {}).get("id")
    if not camp_id:
        print(f"❌ NO_CAMPAIGN_ID_RETURNED: {camp}", file=sys.stderr)
        sys.exit(6)

    print(f"✅ Campaign created: {camp_id}", file=sys.stderr)
    upload_resp = upload_content(camp_id, html)
    print(json.dumps({"campaign": camp, "upload": upload_resp}))

if __name__ == "__main__":
    main()