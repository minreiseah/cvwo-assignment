package categories

import (
	"net/http"

	"main/internal/database"
	"main/internal/util"
	// "github.com/go-chi/chi/v5"
)

type Handler struct {
    db *db.Queries
}

func NewHandler (db *db.Queries) *Handler {
    return &Handler{
        db,
    }
}

func (h *Handler) HandleGetAllCategories(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

    categories, err := h.db.ListCategories(ctx)
    if err != nil {
        http.Error(w, "Failed to retrieve categories", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, categories)
}
