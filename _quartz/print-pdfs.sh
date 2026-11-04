#!/usr/bin/env bash
# Rebuild the booth checklist PDFs from print/*.md: ./_quartz/print-pdfs.sh
# Needs pandoc and Google Chrome. Output: print/pdf/<name>.pdf (published with the site).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
mkdir -p "$ROOT/print/pdf"
cat > "$TMP/style.css" <<'CSS'
@import url("https://fonts.googleapis.com/css2?family=Sansita:wght@700&family=Nunito+Sans:wght@400;700&display=block");
@page { size: letter; margin: 0.6in; }
/* The Table brand (brand.md): Sansita headings, Nunito Sans body. Ink is olive near-black so it holds up in B&W. */
body { font: 13pt/1.3 "Nunito Sans", Arial, sans-serif; color: #2B3025; margin: 0; }
.cols { column-count: 2; column-gap: 0.45in; }
.cols > p, .cols > ul { break-inside: avoid; }
h1 { font: 700 28pt/1.1 Sansita, Georgia, serif; margin: 0 0 4pt; }
.sub { color: #3D4435; font-size: 11pt; margin-bottom: 14pt; }
p strong:only-child { display: block; font: 700 15pt/1.2 Sansita, Georgia, serif; margin-top: 10pt; border-bottom: 2px solid #3D4435; padding-bottom: 2pt; }
ul { list-style: none; padding-left: 0; margin: 6pt 0; }
li { margin: 4pt 0; padding-left: 20pt; text-indent: -20pt; }
.box { font-size: 15pt; margin-right: 6pt; }
input[type=checkbox] { width: 14pt; height: 14pt; margin-right: 8pt; vertical-align: -2pt; }
.foot { margin-top: 18pt; font-size: 10pt; color: #3D4435; }
CSS
for md in "$ROOT"/print/*.md; do
  name="$(basename "$md" .md)"; [ "$name" = index ] && continue
  title="$(sed -n 's/^title: //p' "$md" | head -1)"
  # strip frontmatter, turn [[link|text]] into text, drop the "Full details" footer line
  awk 'BEGIN{f=0} /^---$/{f++; next} f>=2' "$md" \
    | sed -E 's/\[\[[^]|]*\|([^]]*)\]\]/\1/g; s/\[\[([^]]*)\]\]/\1/g' \
    | grep -v '^Full details' \
    | sed -E 's/^- \[ \] /- <span class="box">☐<\/span>/' > "$TMP/$name.md"
  pandoc "$TMP/$name.md" -f gfm -t html5 -s --metadata pagetitle="$title" \
    --css "$TMP/style.css" \
    --include-before-body=<(printf '<div class="sub">The Table · Tech · docs.thetablechurch.life</div><h1>%s</h1><div class="cols">' "$title") \
    --include-after-body=<(printf '</div>') \
    -o "$TMP/$name.html"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
    --print-to-pdf="$ROOT/print/pdf/$name.pdf" "file://$TMP/$name.html" 2>/dev/null
  echo "print/pdf/$name.pdf"
done
