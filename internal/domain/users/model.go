package users

import (
    "time"
)

type Schema struct {
    ID            int          `db:"id"`
    Name         string       `db:"name"`
    Email string    `db:"email"`
    ImageUrl      string       `db:"image_url"`
    Sub   string       `db:"sub"`
    CreatedAt     time.Time    `db:"created_at"`
    UpdatedAt     time.Time    `db:"updated_at"`
}
