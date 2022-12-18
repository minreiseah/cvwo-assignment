package server

import (
	"fmt"
	"net/http"
)

func (s *Server) InitRoutes() {
    s.router.HandleFunc("/users", s.handleUsers())
}

func (s *Server) handleUsers() http.HandlerFunc {
    a := "hello world!"
    return func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, a)
    }
}
