# Stage 1: build the application
FROM node:20-slim AS builder
WORKDIR /app

# Copy package manifests and install dependencies first for better caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files and build the app
COPY . .
RUN npm run build

# Stage 2: serve the built app with a lightweight static server
FROM nginx:stable-alpine AS runner

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 and use default nginx config
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
