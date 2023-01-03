-- name: LinkThreadAndCategory :one
INSERT INTO threads_categories (
    category_id,
    thread_id
) VALUES (
    $1, $2
)
RETURNING *;
