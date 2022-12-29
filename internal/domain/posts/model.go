package posts

import (
    "time"
)

type Schema struct {
    ID            int          `db:"id"`
    Content string    `db:"content"`
    CreatedAt     time.Time    `db:"created_at"`
    UpdatedAt     time.Time    `db:"updated_at"`
    UserID int `db:"user_id"`
    ThreadID int `db:"thread_id"`
}
