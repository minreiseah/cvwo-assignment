package users

import (
	"context"
	db "main/internal/database"

	"github.com/go-chi/chi/v5"
)

func InitRouter(db *db.Queries, ctx context.Context) *chi.Mux {
    r := chi.NewRouter()

    // initialise user handler
    h := NewHandler(db, ctx)

    // add routes to the subrouter
    r.Get("/", h.HandleGetAllUsers)
    r.Get("/{id}", h.HandleGetUser)
    r.Post("/new", h.HandleCreateUser)

    return r
}



