package users

import (
	"context"
	"fmt"
	"net/http"

	"main/internal/database"

	"github.com/go-chi/chi/v5"
)

type Handler struct {
    db *db.Queries
    ctx context.Context
}

func NewHandler (db *db.Queries, ctx context.Context) *Handler {
    return &Handler{
        db,
        ctx,
    }
}

func (h *Handler) HandleGetAllUsers(w http.ResponseWriter, r *http.Request) {
    // ctx := r.Context()
    fmt.Fprintln(w, "GetAllUsers")
}

func (h *Handler) HandleGetUser(w http.ResponseWriter, r *http.Request) {
    id := chi.URLParam(r, "id")


    fmt.Fprintln(w, id)
}

func (h *Handler) HandleCreateUser(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "CreateUser")
}



