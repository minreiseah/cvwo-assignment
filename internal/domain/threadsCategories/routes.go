package threadsCategories

import (
	db "main/internal/database"

	"github.com/go-chi/chi/v5"
)

func InitRouter(db *db.Queries) *chi.Mux {
    r := chi.NewRouter()

    // initialise threadsCategories handler
    h := NewHandler(db)

    // add routes to the subrouter
    r.Post("/", h.HandleLinkThreadAndCategory)

    return r
}



