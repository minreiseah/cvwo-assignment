package statistics

import (
	db "main/internal/database"
	"main/internal/util"
	"net/http"
)

type Handler struct {
    db *db.Queries
}

func NewHandler (db *db.Queries) *Handler {
    return &Handler{
        db,
    }
}

func (h *Handler) HandleGetStatistics(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    statistics, err := h.db.GetStatistics(ctx)
    if err != nil {
        http.Error(w, "Failed to retrieve statistics", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, statistics)
}
