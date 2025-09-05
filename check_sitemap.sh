#!/usr/bin/env bash
set -u

SITEMAP_WWW="https://www.praxis-buchmann.info/sitemap.xml"
SITEMAP_ROOT="https://praxis-buchmann.info/sitemap.xml"

hr(){ printf '\n%s\n\n' "------------------------------------------------------------"; }

check_headers () {
  local url="$1" label="$2"
  hr
  echo "[HEADERS] $label → $url"
  curl -I -L -sS "$url" | awk 'BEGIN{RS="\r\n\r\n"} {print}' | sed -n '1p' \
    | sed -E 's/\r$//' \
    | awk 'BEGIN{IGNORECASE=1} /HTTP|content-type|content-length|last-modified|etag|location|cache-control|strict-transport-security|x-content-type-options|x-xss-protection|x-dns-prefetch-control|vary|age|via/'
}

check_content () {
  local url="$1" label="$2"
  hr
  echo "[CONTENT HEAD] $label → $url (erste 20 Zeilen)"
  curl -sS "$url" | head -20
  hr
  echo "[HEX PREFIX] $label → $url (erste 8 Bytes)"
  curl -sS "$url" | head -c 8 | hexdump -C
}

run_all () {
  # 1) WWW normal
  check_headers "$SITEMAP_WWW" "WWW (normaler UA)"
  check_content "$SITEMAP_WWW" "WWW (normaler UA)"

  # 2) WWW als Googlebot
  hr
  echo "[HEADERS] WWW (Googlebot UA)"
  curl -I -L -sS -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "$SITEMAP_WWW" \
    | awk 'BEGIN{RS="\r\n\r\n"} {print}' | sed -n '1p' \
    | sed -E 's/\r$//' \
    | awk 'BEGIN{IGNORECASE=1} /HTTP|content-type|location|cache-control|strict-transport-security|x-content-type-options|x-xss-protection|vary|age|via/'

  # 3) ROOT→WWW Redirect-Kette
  check_headers "$SITEMAP_ROOT" "ROOT (Redirect-Kette prüfen)"
}

run_all
