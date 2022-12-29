package threads

import (
    "github.com/go-chi/chi/v5"
)

func InitRouter() *chi.Mux {
    r := chi.NewRouter()

    // add routes to the subrouter
    r.Get("/", GetAllThreads)
    r.Get("/{id}", GetThread)
    r.Get("/?{sort}", GetSortedThreads)
    r.Get("/categories/{category_id}", GetThreadsFromCategory)

    r.Post("/new", CreateThread)
    r.Put("/{id}/edit", EditThread)
    r.Delete("/{id}/delete", DeleteThread)

    return r
}



