package users

import (
    "context"
    "encoding/json"
    "fmt"
    "net/http"
    "strconv"

    "main/internal/database"
    "main/internal/util"

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

func enableCors(w *http.ResponseWriter) {
    header := (*w).Header()
    header.Add("Access-Control-Allow-Origin", "*")
    header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    header.Add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
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

func (h *Handler) HandleCreateUser(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    // Parse request body to get user data
    var params db.CreateUserParams
    err := json.NewDecoder(r.Body).Decode(&params)
    if err != nil {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    // Create user
    user, err := h.db.CreateUser(ctx, params)
    if err != nil {
        http.Error(w, "Failed to create user", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, user)
    fmt.Println("success")
}



