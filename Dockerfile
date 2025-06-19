# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app

# Enable and install pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

# Copy only what's needed for dependency resolution
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Rebuild the source code
FROM node:20-alpine AS builder
WORKDIR /app

# Accept build-time args
ARG NODE_ENV
ARG OPTIMIZELY_BEARER_TOKEN

# Set environment variables for build
ENV NODE_ENV=${NODE_ENV}
ENV OPTIMIZELY_BEARER_TOKEN=${OPTIMIZELY_BEARER_TOKEN}
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