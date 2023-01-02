package server

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
    _ "github.com/lib/pq"


	"main/internal/database"
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
    s.InitRoutes()
    s.InitDatabase()
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

func (s *Server) InitDatabase() {

    const (
        host     = "localhost"
        port     = 5432
        user     = "root"
        password = "toor"
        dbname   = "postgres"
    )

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

    conn, err := sql.Open("postgres", psqlInfo)

	if err != nil {
		panic(err)
	}
	defer conn.Close()

	err = conn.Ping()
	if err != nil {
		panic(err)
	}

    s.db = db.New(conn)
	fmt.Print("Connected to database at http://localhost:5432!")
}
