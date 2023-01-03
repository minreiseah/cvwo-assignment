package categories

import (
    db "main/internal/database"

    "github.com/go-chi/chi/v5"
)

func InitRouter(db *db.Queries) *chi.Mux {
    r := chi.NewRouter()

    // initialise category handler
    h := NewHandler(db)

    // add routes to the subrouter
    r.Get("/", h.HandleGetAllCategories)
    r.Get("/threads/{thread_id}", h.HandleListCategoriesFromThread)

    return r
}



