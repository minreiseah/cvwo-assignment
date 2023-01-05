# Build stage
FROM node:18.12.1-alpine3.17 AS builder
WORKDIR /web
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

# Run stage
EXPOSE 3000
CMD [ "npm", "start" ]
