// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: thread.sql

package db

import (
	"context"
	"database/sql"
	"time"

	"github.com/lib/pq"
)

const createThread = `-- name: CreateThread :one
INSERT INTO threads (
    title,
    content,
    user_id
) VALUES (
    $1, $2, (SELECT id from users WHERE sub = $3 LIMIT 1)
)
RETURNING id, title, content, views, created_at, user_id
`

type CreateThreadParams struct {
	Title   string `json:"title"`
	Content string `json:"content"`
	Sub     string `json:"sub"`
}

func (q *Queries) CreateThread(ctx context.Context, arg CreateThreadParams) (Thread, error) {
	row := q.db.QueryRowContext(ctx, createThread, arg.Title, arg.Content, arg.Sub)
	var i Thread
	err := row.Scan(
		&i.ID,
		&i.Title,
		&i.Content,
		&i.Views,
		&i.CreatedAt,
		&i.UserID,
	)
	return i, err
}

const deleteThread = `-- name: DeleteThread :exec
DELETE FROM threads
WHERE id = $1
`

func (q *Queries) DeleteThread(ctx context.Context, id int32) error {
	_, err := q.db.ExecContext(ctx, deleteThread, id)
	return err
}

const getThread = `-- name: GetThread :one
SELECT id, title, content, views, created_at, user_id FROM threads
WHERE id = $1 LIMIT 1
`

func (q *Queries) GetThread(ctx context.Context, id int32) (Thread, error) {
	row := q.db.QueryRowContext(ctx, getThread, id)
	var i Thread
	err := row.Scan(
		&i.ID,
		&i.Title,
		&i.Content,
		&i.Views,
		&i.CreatedAt,
		&i.UserID,
	)
	return i, err
}

const listThreads = `-- name: ListThreads :many
SELECT id, title, content, views, created_at, user_id FROM threads
ORDER BY id
`

func (q *Queries) ListThreads(ctx context.Context) ([]Thread, error) {
	rows, err := q.db.QueryContext(ctx, listThreads)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Thread
	for rows.Next() {
		var i Thread
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Content,
			&i.Views,
			&i.CreatedAt,
			&i.UserID,
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

const listThreadsByPopularity = `-- name: ListThreadsByPopularity :many
SELECT id, title, content, views, created_at, user_id FROM threads
ORDER BY views
`

func (q *Queries) ListThreadsByPopularity(ctx context.Context) ([]Thread, error) {
	rows, err := q.db.QueryContext(ctx, listThreadsByPopularity)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Thread
	for rows.Next() {
		var i Thread
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Content,
			&i.Views,
			&i.CreatedAt,
			&i.UserID,
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

const listThreadsByTime = `-- name: ListThreadsByTime :many
SELECT id, title, content, views, created_at, user_id FROM threads
ORDER BY created_at
`

func (q *Queries) ListThreadsByTime(ctx context.Context) ([]Thread, error) {
	rows, err := q.db.QueryContext(ctx, listThreadsByTime)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Thread
	for rows.Next() {
		var i Thread
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Content,
			&i.Views,
			&i.CreatedAt,
			&i.UserID,
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

const listThreadsDisplay = `-- name: ListThreadsDisplay :many
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
ORDER BY t."created_at" DESC
`

type ListThreadsDisplayRow struct {
	ID         int32     `json:"id"`
	Title      string    `json:"title"`
	Content    string    `json:"content"`
	CreatedAt  time.Time `json:"created_at"`
	Categories []string  `json:"categories"`
	UserID     int32     `json:"user_id"`
	Name       string    `json:"name"`
	Picture    string    `json:"picture"`
	Views      int32     `json:"views"`
	Replies    int64     `json:"replies"`
}

func (q *Queries) ListThreadsDisplay(ctx context.Context) ([]ListThreadsDisplayRow, error) {
	rows, err := q.db.QueryContext(ctx, listThreadsDisplay)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []ListThreadsDisplayRow
	for rows.Next() {
		var i ListThreadsDisplayRow
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Content,
			&i.CreatedAt,
			pq.Array(&i.Categories),
			&i.UserID,
			&i.Name,
			&i.Picture,
			&i.Views,
			&i.Replies,
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

const listThreadsFromCategory = `-- name: ListThreadsFromCategory :many
SELECT t.id, t.title, t.content, t.views, t.created_at, t.user_id FROM threads t
JOIN threads_categories tc ON t.id = tc.thread_id
WHERE tc.category_id = $1
ORDER BY id
`

func (q *Queries) ListThreadsFromCategory(ctx context.Context, categoryID int32) ([]Thread, error) {
	rows, err := q.db.QueryContext(ctx, listThreadsFromCategory, categoryID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Thread
	for rows.Next() {
		var i Thread
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Content,
			&i.Views,
			&i.CreatedAt,
			&i.UserID,
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

const updateThread = `-- name: UpdateThread :one
UPDATE threads
SET title = COALESCE($2, title),
    content = COALESCE($3, content)
WHERE id = $1
RETURNING id, title, content, views, created_at, user_id
`

type UpdateThreadParams struct {
	ID      int32          `json:"id"`
	Title   sql.NullString `json:"title"`
	Content sql.NullString `json:"content"`
}

func (q *Queries) UpdateThread(ctx context.Context, arg UpdateThreadParams) (Thread, error) {
	row := q.db.QueryRowContext(ctx, updateThread, arg.ID, arg.Title, arg.Content)
	var i Thread
	err := row.Scan(
		&i.ID,
		&i.Title,
		&i.Content,
		&i.Views,
		&i.CreatedAt,
		&i.UserID,
	)
	return i, err
}

const updateThreadViews = `-- name: UpdateThreadViews :exec
UPDATE threads
SET views = views + 1
WHERE id = $1
`

func (q *Queries) UpdateThreadViews(ctx context.Context, id int32) error {
	_, err := q.db.ExecContext(ctx, updateThreadViews, id)
	return err
}
