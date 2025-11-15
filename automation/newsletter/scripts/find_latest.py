#!/usr/bin/env python3
import sys, re, datetime
from pathlib import Path
import yaml

ROOT = Path(__file__).resolve().parent.parent
NEWS_DIR = ROOT / "newsletters"
PUBLISHED_LOG = ROOT / "published.log"

def list_newsletters():
    pattern = re.compile(r"^newsletter-(\d{4}-\d{2}-\d{2})\.md$")
    items = []
    for p in NEWS_DIR.glob("newsletter-*.md"):
        m = pattern.match(p.name)
        if m:
            date = datetime.date.fromisoformat(m.group(1))
            items.append((date, p))
    items.sort(key=lambda x: x[0], reverse=True)
    return [p for (_, p) in items]

def read_frontmatter(path):
    txt = path.read_text(encoding="utf8")
    if txt.startswith("---"):
        parts = txt.split("---")
        if len(parts) >= 3:
            fm = parts[1]
            return yaml.safe_load(fm)
    return {}

def already_published(filename):
    if not PUBLISHED_LOG.exists():
        return False
    return filename in PUBLISHED_LOG.read_text(encoding="utf8")

def main():
    files = list_newsletters()
    if not files:
        print("NO_NEWSLETTER", file=sys.stderr)
        sys.exit(2)

    for f in files:
        if already_published(f.name):
            continue

        fm = read_frontmatter(f)
        for key in ("title", "draft"):
            if key not in fm:
                print(f"MISSING_FRONTMATTER:{f.name}:{key}", file=sys.stderr)
                sys.exit(3)

        if fm.get("draft") is True:
            continue

        print(str(f))
        sys.exit(0)

    print("NO_UNPUBLISHED_NEWSLETTER", file=sys.stderr)
    sys.exit(4)

if __name__ == "__main__":
    main()
