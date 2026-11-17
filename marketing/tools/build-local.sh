#!/bin/sh
# Build the site locally with Jekyll 3.10 (the version GitHub Pages uses), without adding anything to the repo.
# Gems go in a temp folder (GC_TOOLS_TMP, default: $TMPDIR/golf-caddie-tools). Needs a Ruby 3+ (Homebrew's works;
# the macOS system Ruby 2.6 is too old). Usage: marketing/tools/build-local.sh   → prints the output folder.
set -e
REPO="$(cd "$(dirname "$0")/../.." && pwd)"
TMP="${GC_TOOLS_TMP:-${TMPDIR:-/tmp}/golf-caddie-tools}"
GEMS="$TMP/gems"; OUT="$TMP/site"
RUBY_BIN="${GC_RUBY_BIN:-/opt/homebrew/opt/ruby/bin}"
[ -x "$RUBY_BIN/ruby" ] || RUBY_BIN="$(dirname "$(command -v ruby)")"
mkdir -p "$GEMS"
export GEM_HOME="$GEMS" GEM_PATH="$GEMS"
if [ ! -f "$GEMS/bin/jekyll" ]; then
  echo "Installing Jekyll into $GEMS (first run only)..." >&2
  "$RUBY_BIN/gem" install --no-document --install-dir "$GEMS" 'jekyll:~>3.10' kramdown-parser-gfm webrick >/dev/null
  "$RUBY_BIN/gem" install --no-document --ignore-dependencies --install-dir "$GEMS" \
    jekyll-seo-tag jekyll-sitemap jekyll-redirect-from base64 ostruct mutex_m observer drb fiddle >/dev/null
fi
cd "$REPO"
"$RUBY_BIN/ruby" "$GEMS/bin/jekyll" build -s . -d "$OUT" 2>&1 | grep -v "warning:" | grep -i -E "error|done" >&2
echo "$OUT"
