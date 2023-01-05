build:
	go build -o build/ cmd/main.go

start:
	${shell go env GOPATH}/bin/air

test:
	go test -v -cover ./... 

sqlc:
	sqlc generate

init_postgres_docker:
	docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=toor -d postgres:15-alpine

remove_postgres_docker:
	docker rm postgres15

createdb:
	docker exec -it postgres15 createdb --username=root --owner=root cvwo_forum

dropdb:
	docker exec -it postgres15 dropdb cvwo_forum

listdb:
	docker exec -it postgres15 psql -l

migrateup:
	migrate -path db/migration -database "postgresql://root:toor@localhost:5432/cvwo_forum?sslmode=disable" -verbose up

migratedown:
	migrate -path db/migration -database "postgresql://root:toor@localhost:5432/cvwo_forum?sslmode=disable" -verbose down

