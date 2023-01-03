// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: post.sql

package db

import (
	"context"
	"database/sql"
)

const createPost = `-- name: CreatePost :one
INSERT INTO posts (
    content,
    thread_id,
    user_id
) VALUES (
    $1, 
    $2,
    (SELECT id FROM users WHERE sub = $3 LIMIT 1)
)
RETURNING id, content, created_at, user_id, thread_id
`

type CreatePostParams struct {
	Content  string `json:"content"`
	ThreadID int32  `json:"thread_id"`
	Sub      string `json:"sub"`
}

func (q *Queries) CreatePost(ctx context.Context, arg CreatePostParams) (Post, error) {
	row := q.db.QueryRowContext(ctx, createPost, arg.Content, arg.ThreadID, arg.Sub)
	var i Post
	err := row.Scan(
		&i.ID,
		&i.Content,
		&i.CreatedAt,
		&i.UserID,
		&i.ThreadID,
	)
	return i, err
}

const deletePost = `-- name: DeletePost :exec
DELETE FROM posts
WHERE id = $1
`

func (q *Queries) DeletePost(ctx context.Context, id int32) error {
	_, err := q.db.ExecContext(ctx, deletePost, id)
	return err
}

const getPost = `-- name: GetPost :one
SELECT id, content, created_at, user_id, thread_id FROM posts
WHERE id = $1 LIMIT 1
`

func (q *Queries) GetPost(ctx context.Context, id int32) (Post, error) {
	row := q.db.QueryRowContext(ctx, getPost, id)
	var i Post
	err := row.Scan(
		&i.ID,
		&i.Content,
		&i.CreatedAt,
		&i.UserID,
		&i.ThreadID,
	)
	return i, err
}

const listPosts = `-- name: ListPosts :many
SELECT id, content, created_at, user_id, thread_id FROM posts
ORDER BY id
`

func (q *Queries) ListPosts(ctx context.Context) ([]Post, error) {
	rows, err := q.db.QueryContext(ctx, listPosts)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.Content,
			&i.CreatedAt,
			&i.UserID,
			&i.ThreadID,
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

const listPostsFromThread = `-- name: ListPostsFromThread :many
SELECT id, content, created_at, user_id, thread_id FROM posts
WHERE thread_id = $1
ORDER BY id
`

func (q *Queries) ListPostsFromThread(ctx context.Context, threadID int32) ([]Post, error) {
	rows, err := q.db.QueryContext(ctx, listPostsFromThread, threadID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.Content,
			&i.CreatedAt,
			&i.UserID,
			&i.ThreadID,
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

const listPostsFromUser = `-- name: ListPostsFromUser :many
SELECT id, content, created_at, user_id, thread_id FROM posts
WHERE user_id = (SELECT id FROM users WHERE sub = $1 LIMIT 1)
ORDER BY id
`

func (q *Queries) ListPostsFromUser(ctx context.Context, sub string) ([]Post, error) {
	rows, err := q.db.QueryContext(ctx, listPostsFromUser, sub)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.Content,
			&i.CreatedAt,
			&i.UserID,
			&i.ThreadID,
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

const updatePost = `-- name: UpdatePost :one
UPDATE posts
SET content = COALESCE($2, content)
WHERE id = $1
RETURNING id, content, created_at, user_id, thread_id
`

type UpdatePostParams struct {
	ID      int32          `json:"id"`
	Content sql.NullString `json:"content"`
}

func (q *Queries) UpdatePost(ctx context.Context, arg UpdatePostParams) (Post, error) {
	row := q.db.QueryRowContext(ctx, updatePost, arg.ID, arg.Content)
	var i Post
	err := row.Scan(
		&i.ID,
		&i.Content,
		&i.CreatedAt,
		&i.UserID,
		&i.ThreadID,
	)
	return i, err
}