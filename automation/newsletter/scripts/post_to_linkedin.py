#!/usr/bin/env python3
import os, sys, requests, json

TOKEN = os.getenv("LINKEDIN_ACCESS_TOKEN")
API = "https://api.linkedin.com/v2"

def post_text(author_urn, text):
    headers = {
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json"
    }
    payload = {
        "author": author_urn,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {"text": text},
                "shareMediaCategory": "NONE"
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }
    r = requests.post(f"{API}/ugcPosts", headers=headers, json=payload)
    r.raise_for_status()
    return r.json()

if __name__ == "__main__":
        if len(sys.argv) < 3:
            print("usage: post_to_linkedin.py AUTHOR_URN \"text\"")
            sys.exit(1)

        if not TOKEN:
            print("Missing LINKEDIN_ACCESS_TOKEN", file=sys.stderr)
            sys.exit(2)

        urn = sys.argv[1]
        text = sys.argv[2]

        resp = post_text(urn, text)
        print(json.dumps(resp))
