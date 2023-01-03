package server

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	_ "github.com/lib/pq"

	"main/config"
	db "main/internal/database"
	"main/internal/router"
)

type Server struct {
    Version string

    db *db.Queries

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
    s.InitDatabase()
    s.InitRoutes()
}

func (s *Server) Run() {
    s.httpServer = &http.Server{
        Addr: ":8000",
        Handler: s.router,
    }

	fmt.Println("Listening on port 8000 at http://localhost:8000!")

    err := s.httpServer.ListenAndServe()
    if err != nil {
        log.Fatal(err)
    }
}

func (s *Server) InitDatabase() {
    conn, err := sql.Open(config.DbDriver(), config.DbSource())
	if err != nil {
		panic(err)
	}

	err = conn.Ping()
	if err != nil {
		panic(err)
	}

    queries := db.New(conn)
    s.db = queries

	fmt.Println("Connected to database at http://localhost:5432!")
}
