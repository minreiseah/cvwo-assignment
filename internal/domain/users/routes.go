package users

import (
    "github.com/go-chi/chi/v5"
)

func InitRouter() *chi.Mux {
    r := chi.NewRouter()

    // add routes to the subrouter
    r.Get("/", GetAllUsers)
    r.Get("/{id}", GetUser)
    r.Post("/new", CreateUser)

    return r
}



