-- name: CreatePost :one
INSERT INTO posts (
    content,
    thread_id,
    user_id
) VALUES (
    $1, 
    $2,
    (SELECT id FROM users WHERE sub = $3 LIMIT 1)
)
RETURNING *;

-- name: GetPost :one
SELECT * FROM posts
WHERE id = $1 LIMIT 1;

-- name: ListPosts :many
SELECT * FROM posts
ORDER BY id;

-- name: ListPostsFromThread :many
SELECT
p."id" as "post_id",
p."content",
p."created_at",
p."thread_id",
u.id as "user_id",
u."name" as "author",
u."picture"
FROM posts p
JOIN users u on u.id = p.user_id
WHERE p.thread_id = $1
ORDER BY p."created_at" ASC;

-- name: ListPostsFromUser :many
SELECT * FROM posts
WHERE user_id = (SELECT id FROM users WHERE sub = $1 LIMIT 1)
ORDER BY id;

-- name: UpdatePost :one
UPDATE posts
SET content = COALESCE(sqlc.narg(content), content)
WHERE id = $1
RETURNING *;

-- name: DeletePost :exec
DELETE FROM posts
WHERE id = $1;

