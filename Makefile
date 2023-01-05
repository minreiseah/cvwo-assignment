DB_URL=postgresql://root:toor@localhost:5432/cvwo_forum?sslmode=disable

build:
	go build -o build/ cmd/main.go

start:
	${shell go env GOPATH}/bin/air

test:
	go test -v -cover ./... 

sqlc:
	sqlc generate

# docker

network:
	docker network create cvwo-network

init_postgres_docker:
	docker run --name postgres15 --network=cvwo-network -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=toor -d postgres:15-alpine

remove_postgres_docker:
	docker rm postgres15

createdb:
	docker exec -it postgres15 createdb --username=root --owner=root cvwo_forum

dropdb:
	docker exec -it postgres15 dropdb cvwo_forum

listdb:
	docker exec -it postgres15 psql -l

init_backend_docker:
	docker run --name cvwo-backend --network=cvwo-network -p 8000:8000 cvwo-backend:latest

remove_backend_docker:
	docker rm cvwo-backend

# migration

migrateup:
	migrate -path db/migration -database "${DB_URL}" -verbose up

migrateup1:
	migrate -path db/migration -database "${DB_URL}" -verbose up 1

migratedown:
	migrate -path db/migration -database "${DB_URL}" -verbose down

migratedown1:
	migrate -path db/migration -database "${DB_URL}" -verbose down 1

