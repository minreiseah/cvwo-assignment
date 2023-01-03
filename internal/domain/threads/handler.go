package threads

import (
	"fmt"
	db "main/internal/database"
	"main/internal/util"
	"net/http"
	"strconv"

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

func (h *Handler) HandleCreateThread(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    // parse request body to get post data
    var params db.CreateThreadParams
    util.Parse(w, r, &params)

    // Create thread
    thread, err := h.db.CreateThread(ctx, params)
    if err != nil {
        http.Error(w, "Failed to create thread", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, thread)
}


func (h *Handler) HandleGetThread(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 32);
    if err != nil {
        http.Error(w, "Invalid Thread ID", http.StatusInternalServerError)
        return
    }

    thread, err := h.db.GetThread(ctx, int32(id))
    if err != nil {
        http.Error(w, "Failed to retrieve threads", http.StatusInternalServerError)
    }

    util.Respond(w, http.StatusOK, thread)
}

func (h *Handler) HandleListThreadsDisplay(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    threads, err := h.db.ListThreadsDisplay(ctx)
    if err != nil {
        http.Error(w, "Failed to retrieve threads", http.StatusInternalServerError)
    }

    fmt.Println(threads[0])

    util.Respond(w, http.StatusOK, threads)
}

func (h *Handler) HandleListThreadsByPopularity(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    threads, err := h.db.ListThreadsByPopularity(ctx)
    if err != nil {
        http.Error(w, "Failed to retrieve threads", http.StatusInternalServerError)
    }

    util.Respond(w, http.StatusOK, threads)
}

func (h *Handler) HandleListThreadsByTime(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    threads, err := h.db.ListThreadsByTime(ctx)
    if err != nil {
        http.Error(w, "Failed to retrieve threads", http.StatusInternalServerError)
    }

    util.Respond(w, http.StatusOK, threads)
}

func (h *Handler) HandleListThreadsFromCategory(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    categoryID, err := strconv.ParseInt(chi.URLParam(r, "category_id"), 10, 32);
    if err != nil {
        http.Error(w, "Invalid category ID", http.StatusInternalServerError)
        return
    }

    threads, err := h.db.ListThreadsFromCategory(ctx, int32(categoryID))
    if err != nil {
        http.Error(w, "Failed to retrieve threads", http.StatusInternalServerError)
    }

    util.Respond(w, http.StatusOK, threads)
}

func (h *Handler) HandleEditThread(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    // Parse request body to get thread data
    var params db.UpdateThreadParams
    util.Parse(w, r, &params)

    // Update thread
    thread, err := h.db.UpdateThread(ctx, params)
    if err != nil {
        http.Error(w, "Failed to update thread", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, thread)
}

func (h *Handler) HandleUpdateThreadViews(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 32);
    if err != nil {
        http.Error(w, "Invalid thread ID", http.StatusInternalServerError)
        return
    }

    // Delete the thread with the specified id
    err = h.db.UpdateThreadViews(ctx, int32(id))
    if err != nil {
        http.Error(w, "Failed to update thread viewcount", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, "")
}

func (h *Handler) HandleDeleteThread(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 32);
    if err != nil {
        http.Error(w, "Invalid thread ID", http.StatusInternalServerError)
        return
    }

    // Delete the thread with the specified id
    err = h.db.DeleteThread(ctx, int32(id))

    if err != nil {
        http.Error(w, "Failed to delete thread", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, "thread deleted")
}


