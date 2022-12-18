package posts

import (
    "github.com/go-chi/chi/v5"
)

func InitRouter() *chi.Mux {
    r := chi.NewRouter()

    // add routes to the subrouter
    r.Get("/", GetAllPosts)
    r.Post("/threads/{thread_id}", CreatePost)
    r.Put("/{id}/edit", EditPost)
    r.Delete("/{id}/delete", DeletePost)

    return r
}
