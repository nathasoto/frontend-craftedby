#!/bin/sh

ROOT_DIR=/app/assets
# Replace env vars in files served by NGINX
for file in $ROOT_DIR/*.js; do
  if [ -f "$file" ]; then
    sed -i 's|http://127.0.0.1:8081/api|'${VITE_API_URL}'|g' "$file"
    sed -i 's|http://127.0.0.1:8081/sanctum/csrf-cookie|'${VITE_SANCTUM_URL}'|g' "$file"
  fi
done
# Let container execution proceed
exec "$@"