# Build stage
FROM golang:1.18.1-alpine3.15 AS builder
WORKDIR /app
COPY . .
RUN go build -o main cmd/main.go
RUN apk add curl
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.15.2/migrate.linux-amd64.tar.gz | tar xvz

# Run stage
FROM alpine:3.15
WORKDIR /app
COPY --from=builder /app/main .
COPY --from=builder /app/migrate ./migrate
COPY db/migration ./migration
COPY start.sh .
COPY wait-for.sh .

EXPOSE 8000
# ENTRYPOINT [ "/app/wait-for.sh", "postgres15:5432", "--", "/app/start.sh" ]
CMD [ "/app/main" ]

