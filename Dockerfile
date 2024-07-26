# Build stage
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx as production-stage

# Install nano
RUN apt-get update && apt-get install -y nano && apt-get clean

RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

# Copy and set permissions for the entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Copy and set permissions for the environment substitution script
COPY substitute_environment_variables.sh /docker-entrypoint.d/substitute_environment_variables.sh
RUN chmod +x /docker-entrypoint.d/substitute_environment_variables.sh


# Expose port 80
EXPOSE 80

# Define the default command
#CMD "/docker-entrypoint.d/substitute_environment_variables.sh && nginx -g 'daemon off;'
CMD ["/usr/local/bin/docker-entrypoint.sh"]