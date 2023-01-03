-- name: CreateCategory :one
INSERT INTO categories (
    name,
    description
) VALUES (
    $1, $2
)
RETURNING *;

-- name: GetCategory :one
SELECT * FROM categories
WHERE id = $1 LIMIT 1;

-- name: ListCategories :many
SELECT * FROM categories
ORDER BY id;

-- name: UpdateCategory :one
UPDATE categories
SET name = COALESCE(sqlc.narg(name), name),
    description = COALESCE(sqlc.narg(description), description)
WHERE id = $1
RETURNING *;

-- name: DeleteCategory :exec
DELETE FROM categories
WHERE id = $1;
