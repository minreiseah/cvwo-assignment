package categories

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

func (h *Handler) HandleGetAllCategories(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

    categories, err := h.db.ListCategories(ctx)
    if err != nil {
        http.Error(w, "Failed to retrieve categories", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, categories)
}

func (h *Handler) HandleListCategoriesFromThread(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    threadID, err := strconv.ParseInt(chi.URLParam(r, "thread_id"), 10, 32);
    if err != nil {
        http.Error(w, "Invalid thread ID", http.StatusInternalServerError)
        return
    }

    categories, err := h.db.ListThreadsFromCategory(ctx, int32(threadID))
    if err != nil {
        http.Error(w, "Failed to retrieve categories", http.StatusInternalServerError)
    }

    util.Respond(w, http.StatusOK, categories)
}
