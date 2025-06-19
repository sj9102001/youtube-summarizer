# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./
RUN npm install --frozen-lockfile # Or yarn install --frozen-lockfile

COPY . .

RUN npm run build # Or yarn build

# Stage 2: Create the production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Copy only the necessary build output from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]