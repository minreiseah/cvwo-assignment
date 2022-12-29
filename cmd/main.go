package main

import (
	"main/internal/server"
)

func main() {
	s := server.New()
	s.Init()
	s.Run()
}
