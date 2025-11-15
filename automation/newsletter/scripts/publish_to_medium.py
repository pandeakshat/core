#!/usr/bin/env python3
import os, sys, markdown, requests, yaml, json

TOKEN = os.getenv("MEDIUM_INTEGRATION_TOKEN")
API = "https://api.medium.com/v1"

def get_user_id():
    headers = {"Authorization": f"Bearer {TOKEN}"}
    r = requests.get(f"{API}/me", headers=headers)
    r.raise_for_status()
    return r.json()["data"]["id"]

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

def post_article(user_id, title, html, tags):
    headers = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}
    payload = {
        "title": title,
        "contentFormat": "html",
        "content": html,
        "publishStatus": "public"
    }
    if tags:
        payload["tags"] = tags

    r = requests.post(f"{API}/users/{user_id}/posts", json=payload, headers=headers)
    r.raise_for_status()
    return r.json()

def main():
    if len(sys.argv) < 2:
        print("usage: publish_to_medium.py path/to/file.md")
        sys.exit(1)

    if not TOKEN:
        print("Missing MEDIUM_INTEGRATION_TOKEN", file=sys.stderr)
        sys.exit(2)

    path = sys.argv[1]

    meta = read_meta(path)
    title = meta.get("title", "Newsletter")
    html = render_html(path)

    uid = get_user_id()
    resp = post_article(uid, title, html, meta.get("tags"))
    print(json.dumps(resp))

if __name__ == "__main__":
    main()
