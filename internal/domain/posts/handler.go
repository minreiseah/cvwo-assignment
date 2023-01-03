package posts

import (
	// "encoding/json"
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

func (h *Handler) HandleCreatePost(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    // parse request body to get post data
    var params db.CreatePostParams
    util.Parse(w, r, &params)

    // Create post
    post, err := h.db.CreatePost(ctx, params)
    if err != nil {
        http.Error(w, "Failed to create post", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, post)
}



func (h *Handler) HandleGetAllPosts(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    posts, err := h.db.ListPosts(ctx)
    if err != nil {
        http.Error(w, "Failed to retrieve posts", http.StatusInternalServerError)
    }

    util.Respond(w, http.StatusOK, posts)
}

func (h *Handler) HandleListPostsFromThread(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()
    threadID, err := strconv.ParseInt(chi.URLParam(r, "thread_id"), 10, 32);
    if err != nil {
        http.Error(w, "Invalid Thread ID", http.StatusInternalServerError)
        return
    }

    posts, err := h.db.ListPostsFromThread(ctx, int32(threadID))
    if err != nil {
        http.Error(w, "Failed to retrieve posts", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, posts)
}

func (h *Handler) HandleEditPost(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    // Parse request body to get post data
    var params db.UpdatePostParams
    util.Parse(w, r, &params)

    // Update post
    post, err := h.db.UpdatePost(ctx, params)
    if err != nil {
        http.Error(w, "Failed to update post", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, post)
}

func (h *Handler) HandleDeletePost(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 32);
    if err != nil {
        http.Error(w, "Invalid post ID", http.StatusInternalServerError)
        return
    }

    // Delete the post with the specified id
    err = h.db.DeletePost(ctx, int32(id))

    if err != nil {
        http.Error(w, "Failed to delete post", http.StatusInternalServerError)
        return
    }

    util.Respond(w, http.StatusOK, "post deleted")
}



