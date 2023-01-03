package threads

import (
    "main/internal/database"

	"github.com/go-chi/chi/v5"
)

func InitRouter(db *db.Queries) *chi.Mux {
    r := chi.NewRouter()

    // initialise thread handler
    h := NewHandler(db)

    // add routes to the subrouter
    r.Get("/", h.HandleListThreadsDisplay)
    r.Get("/{id}", h.HandleGetThread)
    r.Get("/popular", h.HandleListThreadsByPopularity)
    r.Get("/time", h.HandleListThreadsByTime)
    r.Get("/categories/{category_id}", h.HandleListThreadsFromCategory)

    r.Post("/new", h.HandleCreateThread)
    r.Put("/edit", h.HandleEditThread)
    r.Put("/{id}", h.HandleUpdateThreadViews)
    r.Delete("/delete/{id}", h.HandleDeleteThread)

    return r
}



