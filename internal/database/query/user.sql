-- name: CreateUser :one
INSERT INTO users (
    name,
    email,
    picture,
    sub
) VALUES (
    $1, $2, $3, $4
)
RETURNING *;

-- name: GetUser :one
SELECT * FROM users
WHERE id = $1 LIMIT 1;

-- name: ListUsers :many
SELECT * FROM users
ORDER BY id;

-- name: DeleteAccount :exec
DELETE FROM users
WHERE id = $1;

-- name: GetUserID :one
SELECT id from users
WHERE sub = $1 LIMIT 1;

-- name: GetUserSub :one
SELECT sub from users
WHERE id = $1 LIMIT 1;
