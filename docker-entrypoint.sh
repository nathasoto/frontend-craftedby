#!/bin/sh

# Execute the environment substitution script first
/docker-entrypoint.d/substitute_environment_variables.sh

# Start Nginx in the foreground
nginx -g 'daemon off;'