from html.parser import HTMLParser
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = [
    "index.html",
    "style.css",
    "assets/cell-segmentation.png",
    "assets/church-os.png",
    "assets/robotics-dashboard.png",
    "assets/change-detection.png",
]

class References(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = []
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        for key in ("src", "href"):
            value = values.get(key, "")
            if value and not value.startswith(("#", "http://", "https://", "mailto:", "tel:", "data:")):
                self.paths.append(value.split("?", 1)[0].split("#", 1)[0])

errors = []
for relative in REQUIRED:
    path = ROOT / relative
    if not path.is_file():
        errors.append(f"Missing required file: {relative}")
    elif path.stat().st_size == 0:
        errors.append(f"Empty required file: {relative}")

index = ROOT / "index.html"
if index.is_file():
    parser = References()
    parser.feed(index.read_text(encoding="utf-8"))
    for relative in sorted(set(parser.paths)):
        if not (ROOT / relative).is_file():
            errors.append(f"Broken local reference: {relative}")

if errors:
    print("\n".join(f"ERROR: {item}" for item in errors))
    sys.exit(1)

print("Portfolio validation passed.")
print(f"Validated {len(REQUIRED)} required files and all local HTML references.")
