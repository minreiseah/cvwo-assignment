# Build stage
FROM golang:1.18.1-alpine3.15 AS builder
WORKDIR /app
COPY . .
RUN go build -o main cmd/main.go

# Run stage
FROM alpine:3.15
WORKDIR /app
COPY --from=builder /app/main .
COPY db/migration ./db/migration
COPY start.sh .
COPY wait-for.sh .
COPY .env .

EXPOSE 8000
CMD [ "/app/main" ]

