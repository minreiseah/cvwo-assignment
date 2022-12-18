package server

import (
	"fmt"
	"log"
	"main/internal/router"
	"net/http"

	"github.com/go-chi/chi/v5"
)

type Server struct {
    Version string
    // db *database

    router *chi.Mux
    httpServer *http.Server
}

func New() *Server {
    s := &Server {
        Version: "1",
        router: router.New(),
    }
    return s
}

func (s *Server) Init() {
    s.InitRoutes()
}

func (s *Server) Run() {
    s.httpServer = &http.Server{
        Addr: ":8000",
        Handler: s.router,
    }

	fmt.Print("Listening on port 8000 at http://localhost:8000!")

    err := s.httpServer.ListenAndServe()
    if err != nil {
        log.Fatal(err)
    }
}
