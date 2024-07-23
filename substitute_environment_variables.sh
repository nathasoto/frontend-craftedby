#!/bin/sh

# Define las variables de entorno en el script
export VITE_API_URL=http://mi-api-url
export VITE_SANCTUM_URL=http://mi-csrf-url

ROOT_DIR=./dist
# Replace env vars in files served by NGINX
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html $ROOT_DIR/precache-manifest*.js;
do
  sed -i 's|http://127.0.0.1:8081/api|'${VITE_API_URL}'|g' $file
  sed -i 's|http://127.0.0.1:8081/sanctum/csrf-cookie|'${VITE_SANCTUM_URL}'|g' $file

done
# Let container execution proceed
exec "$@"