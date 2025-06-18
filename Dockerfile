# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

# Rebuild the source code
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# ✅ Set NODE_ENV to development at build time to avoid live CMS fetches
ENV NODE_ENV=development
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

# ✅ Reset NODE_ENV to production for runtime
ENV NODE_ENV=production

# Copy only needed files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]