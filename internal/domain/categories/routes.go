package categories

import (
    "github.com/go-chi/chi/v5"
)

func InitRouter() *chi.Mux {
    r := chi.NewRouter()

    // add routes to the subrouter
    r.Get("/", GetAllCategories)

    return r
}



