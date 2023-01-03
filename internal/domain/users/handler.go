package users

import (
    "net/http"
    "strconv"

    "main/internal/database"
    "main/internal/util"

    "github.com/go-chi/chi/v5"
)

type Handler struct {
    db *db.Queries
}

func NewHandler (db *db.Queries) *Handler {
    return &Handler{
        db,
    }
}

func (h *Handler) HandleCreateUser(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    // Parse request body to get user data
    var params db.CreateUserParams
    util.Parse(w, r, &params)

    // Create user
    user, err := h.db.CreateUser(ctx, params)
    if err != nil {
        http.Error(w, "Failed to create user", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, user)
}

func (h *Handler) HandleListUsers(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    users, err := h.db.ListUsers(ctx)
    if err != nil {
        http.Error(w, "Failed to retrieve users", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, users)
}

func (h *Handler) HandleGetUser(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 32);
    if err != nil {
        http.Error(w, "Invalid User ID", http.StatusBadRequest)
        return
    }

    user, err := h.db.GetUser(ctx, int32(id))
    if err != nil {
        http.Error(w, "Failed to retrieve user", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, user)
}

