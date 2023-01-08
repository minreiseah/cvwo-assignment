package server

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/golang-migrate/migrate/v4"
    _ "github.com/golang-migrate/migrate/v4/database/postgres"
    _ "github.com/golang-migrate/migrate/v4/source/github"
	_ "github.com/lib/pq"
	_ "github.com/golang-migrate/migrate/v4/source/file"

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

	fmt.Println("Listening on port 8000!")

    err := s.httpServer.ListenAndServe()
    if err != nil {
        log.Fatal(err)
    }
}

func (s *Server) InitDatabase() {
    // Connect to DB
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

	fmt.Printf("Connected to %s database at %s\n", config.DbDriver(), config.DbSource())

    // Perform DB migration
    runDBMigration(config.MigrationURL(), config.DbSource())

}

func runDBMigration(migrationURL string, dbSource string) {
    migration, err := migrate.New(migrationURL, dbSource)
    if err != nil {
        log.Fatal("cannot create new migrate instance: ", err)
    }

    err = migration.Up();
    if err != nil && err != migrate.ErrNoChange {
        log.Fatal("failed to run migrate up: ", err)
    }

    log.Println("db migrated successfully")


}
