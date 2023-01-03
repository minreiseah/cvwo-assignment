-- name: CreateThread :one
INSERT INTO threads (
    title,
    content,
    user_id
) VALUES (
    $1, $2, (SELECT id from users WHERE sub = $3 LIMIT 1)
)
RETURNING *;

-- name: ListThreads :many
SELECT * FROM threads
ORDER BY id;

-- name: GetThread :one
SELECT * FROM threads
WHERE id = $1 LIMIT 1;

-- name: ListThreadsByPopularity :many
SELECT * FROM threads
ORDER BY views;

-- name: ListThreadsByTime :many
SELECT * FROM threads
ORDER BY created_at;

-- name: ListThreadsFromCategory :many
SELECT t.* FROM threads t
JOIN threads_categories tc ON t.id = tc.thread_id
WHERE tc.category_id = $1
ORDER BY id;

-- name: UpdateThread :one
UPDATE threads
SET title = COALESCE(sqlc.narg(title), title),
    content = COALESCE(sqlc.narg(content), content)
WHERE id = $1
RETURNING *;

-- name: DeleteThread :exec
DELETE FROM threads
WHERE id = $1;
