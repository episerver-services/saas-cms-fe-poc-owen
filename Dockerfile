# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Rebuild the source code
FROM node:20-alpine AS builder
WORKDIR /app

# === Accept build-time secrets and env vars ===
ARG NODE_ENV=production
ARG OPTIMIZELY_API_URL
ARG OPTIMIZELY_SINGLE_KEY
ARG OPTIMIZELY_PREVIEW_SECRET
ARG IS_BUILD=false

# === Set runtime environment variables ===
ENV NODE_ENV=$NODE_ENV
ENV OPTIMIZELY_API_URL=$OPTIMIZELY_API_URL
ENV OPTIMIZELY_SINGLE_KEY=$OPTIMIZELY_SINGLE_KEY
ENV OPTIMIZELY_PREVIEW_SECRET=$OPTIMIZELY_PREVIEW_SECRET
ENV IS_BUILD=$IS_BUILD
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY . .

RUN pnpm build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["pnpm", "start"]