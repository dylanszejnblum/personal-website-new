# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

# pnpm via corepack (version pinned by package.json "packageManager")
RUN corepack enable

# Install deps with a warm cache layer
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the static site (skip the check/lint wrapper used in local dev)
COPY . .
RUN pnpm exec astro build

# ---- Runtime stage ----
FROM nginx:1.27-alpine AS runtime

# Static server config (clean URLs, gzip, asset caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Built static output
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
