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

-- name: GetAllUsers :many
SELECT * FROM users
ORDER BY id;

-- name: DeleteAccount :exec
DELETE FROM users
WHERE id = $1;
