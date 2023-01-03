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

-- name: ListThreadsDisplay :many
SELECT
t."id",
t."title",
t."content",
t."created_at",
array_agg(c."name")::TEXT[] as "categories",
u.id as "user_id",
u."name", 
u.picture,
t."views",
(SELECT COUNT(*) FROM posts p WHERE p.thread_id = t.id) as "replies"
FROM threads t 
JOIN users u ON u.id = t.user_id
JOIN threads_categories tc ON tc.thread_id = t.id 
JOIN categories c ON c.id = tc.category_id 
GROUP BY t.id, u.id
ORDER BY t."created_at" DESC;

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

-- name: UpdateThreadViews :exec
UPDATE threads
SET views = views + 1
WHERE id = $1;


-- name: DeleteThread :exec
DELETE FROM threads
WHERE id = $1;
