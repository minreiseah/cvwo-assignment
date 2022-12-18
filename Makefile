build:
	go build -o build/ cmd/main.go

start:
	${shell go env GOPATH}/bin/air
