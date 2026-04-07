#!/usr/bin/env sh
# Proje kökünden çalıştırın: sh deploy/copy-standalone.sh
# `npm run build` sonrası standalone pakete public + static kopyalar.
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
test -f .next/standalone/server.js || { echo "Önce: npm run build"; exit 1; }
cp -r public .next/standalone/public
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/static
echo "Tamam. Çalıştırma: cd .next/standalone && HOSTNAME=0.0.0.0 PORT=3030 pm2 start server.js --name oakacorn"
