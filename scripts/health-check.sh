#!/usr/bin/env bash
set -euo pipefail

echo "==> Detectando gestor de paquetes..."
if [ -f "pnpm-lock.yaml" ]; then
  PKG=pnpm
  INSTALL="pnpm i --frozen-lockfile"
elif [ -f "yarn.lock" ]; then
  PKG=yarn
  INSTALL="yarn install --frozen-lockfile"
elif [ -f "package-lock.json" ]; then
  PKG=npm
  INSTALL="npm ci"
else
  echo "No se encontró lockfile. Usando npm install --no-fund --no-audit"
  PKG=npm
  INSTALL="npm install --no-fund --no-audit"
fi

echo "==> Instalar dependencias con $PKG ..."
eval "$INSTALL"

echo "==> Lint (si existe)..."
if npm run | grep -qE '^  lint'; then
  npm run lint
elif yarn -v >/dev/null 2>&1 && yarn run | grep -qE '^  lint'; then
  yarn lint
elif command -v pnpm >/dev/null 2>&1 && pnpm run | grep -qE '^lint'; then
  pnpm run lint
else
  echo "No hay script lint. OK."
fi

echo "==> Tests (si existen)..."
if npm run | grep -qE '^  test'; then
  npm test -- --watch=false || npm test
elif yarn -v >/dev/null 2>&1 && yarn run | grep -qE '^  test'; then
  yarn test --watch=false || yarn test
elif command -v pnpm >/dev/null 2>&1 && pnpm run | grep -qE '^test'; then
  pnpm test -- --watch=false || pnpm test
else
  echo "No hay script test. OK."
fi

echo "==> Build (para verificar compilación)..."
if npm run | grep -qE '^  build'; then
  npm run build
elif yarn -v >/dev/null 2>&1 && yarn run | grep -qE '^  build'; then
  yarn build
elif command -v pnpm >/dev/null 2>&1 && pnpm run | grep -qE '^build'; then
  pnpm build
else
  echo "No hay script build definido."
fi

echo "==> Health check OK"
