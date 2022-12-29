package threads

import (
    "time"
)

type Schema struct {
    ID            int          `db:"id"`
    Title         string       `db:"title"`
    Content string    `db:"content"`
    Views      string       `db:"views"`
    CreatedAt     time.Time    `db:"created_at"`
    UpdatedAt     time.Time    `db:"updated_at"`
    UserID int `db:"user_id"`
}
