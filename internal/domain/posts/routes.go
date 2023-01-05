package posts

import (
    db "main/internal/database"

	"github.com/go-chi/chi/v5"
)

func InitRouter(db *db.Queries) *chi.Mux {
    r := chi.NewRouter()

    // initialise post handler
    h := NewHandler(db)

    // add routes to the subrouter
    r.Get("/", h.HandleGetAllPosts)
    r.Get("/threads/{thread_id}", h.HandleListPostsFromThread)
    r.Post("/new", h.HandleCreatePost)
    r.Put("/edit", h.HandleEditPost)
    r.Delete("/delete/{id}", h.HandleDeletePost)

    return r
}
