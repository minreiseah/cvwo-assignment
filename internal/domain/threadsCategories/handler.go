package threadsCategories

import (
	db "main/internal/database"
	"main/internal/util"
	"net/http"
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

func (h *Handler) HandleLinkThreadAndCategory(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    // Parse request body to get thread, category ids
    var params db.LinkThreadAndCategoryParams
    util.Parse(w, r, &params)

    // Create link
    link, err := h.db.LinkThreadAndCategory(ctx, params)
    if err != nil {
        http.Error(w, "Failed to link thread and category", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, link)
}
