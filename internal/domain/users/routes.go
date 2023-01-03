package users

import (
	db "main/internal/database"

	"github.com/go-chi/chi/v5"
)

func InitRouter(db *db.Queries) *chi.Mux {
    r := chi.NewRouter()

    // initialise user handler
    h := NewHandler(db)

    // add routes to the subrouter
    r.Get("/", h.HandleListUsers)
    r.Get("/{id}", h.HandleGetUser)
    r.Post("/new", h.HandleCreateUser)

    return r
}



