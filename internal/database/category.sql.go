// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: category.sql

package db

import (
	"context"
	"database/sql"
)

const createCategory = `-- name: CreateCategory :one
INSERT INTO categories (
    name,
    description
) VALUES (
    $1, $2
)
RETURNING id, name, description, created_at
`

type CreateCategoryParams struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

func (q *Queries) CreateCategory(ctx context.Context, arg CreateCategoryParams) (Category, error) {
	row := q.db.QueryRowContext(ctx, createCategory, arg.Name, arg.Description)
	var i Category
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Description,
		&i.CreatedAt,
	)
	return i, err
}

const deleteCategory = `-- name: DeleteCategory :exec
DELETE FROM categories
WHERE id = $1
`

func (q *Queries) DeleteCategory(ctx context.Context, id int32) error {
	_, err := q.db.ExecContext(ctx, deleteCategory, id)
	return err
}

const getCategory = `-- name: GetCategory :one
SELECT id, name, description, created_at FROM categories
WHERE id = $1 LIMIT 1
`

func (q *Queries) GetCategory(ctx context.Context, id int32) (Category, error) {
	row := q.db.QueryRowContext(ctx, getCategory, id)
	var i Category
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Description,
		&i.CreatedAt,
	)
	return i, err
}

const listCategories = `-- name: ListCategories :many
SELECT id, name, description, created_at FROM categories
ORDER BY id
`

func (q *Queries) ListCategories(ctx context.Context) ([]Category, error) {
	rows, err := q.db.QueryContext(ctx, listCategories)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Category
	for rows.Next() {
		var i Category
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.Description,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const listCategoriesFromThread = `-- name: ListCategoriesFromThread :many
SELECT c.id, c.name, c.description, c.created_at FROM categories c
JOIN threads_categories tc ON c.id = tc.category_id
WHERE tc.thread_id = $1
ORDER BY id
`

func (q *Queries) ListCategoriesFromThread(ctx context.Context, threadID int32) ([]Category, error) {
	rows, err := q.db.QueryContext(ctx, listCategoriesFromThread, threadID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Category
	for rows.Next() {
		var i Category
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.Description,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateCategory = `-- name: UpdateCategory :one
UPDATE categories
SET name = COALESCE($2, name),
    description = COALESCE($3, description)
WHERE id = $1
RETURNING id, name, description, created_at
`

type UpdateCategoryParams struct {
	ID          int32          `json:"id"`
	Name        sql.NullString `json:"name"`
	Description sql.NullString `json:"description"`
}

func (q *Queries) UpdateCategory(ctx context.Context, arg UpdateCategoryParams) (Category, error) {
	row := q.db.QueryRowContext(ctx, updateCategory, arg.ID, arg.Name, arg.Description)
	var i Category
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Description,
		&i.CreatedAt,
	)
	return i, err
}
