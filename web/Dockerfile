# Build stage
FROM node:18.12.1-alpine3.17 AS builder
WORKDIR /web
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM node:18.12.1-alpine3.17
WORKDIR /web
RUN npm install -g serve
COPY --from=builder /web/build ./build

EXPOSE 3000
CMD [ "serve", "-s", "/web/build" ]
