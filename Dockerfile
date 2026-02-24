ARG BUN_VERSION=1.3
ARG NGINX_VERSION=1.28-alpine

FROM oven/bun:${BUN_VERSION} AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build.ts --outdir dist --target browser \
    && cp -r public dist/

# Serve built files with nginx
FROM nginx:${NGINX_VERSION} AS run
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80