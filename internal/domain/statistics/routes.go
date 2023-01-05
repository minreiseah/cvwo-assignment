package statistics

import (
    db "main/internal/database"

	"github.com/go-chi/chi/v5"
)

func InitRouter(db *db.Queries) *chi.Mux {
    r := chi.NewRouter()

    // initialise post handler
    h := NewHandler(db)

    // add routes to the subrouter
    r.Get("/", h.HandleGetStatistics)

    return r
}
