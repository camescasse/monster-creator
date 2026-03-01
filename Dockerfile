FROM node:25-alpine AS build

WORKDIR /app

COPY package*.json ./

# Cypress is not needed for production image builds.
ENV CYPRESS_INSTALL_BINARY=0
RUN npm ci

COPY . .
RUN npm run build

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

EXPOSE 3000
