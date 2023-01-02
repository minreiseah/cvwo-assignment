package db

import (
	"database/sql"
	"main/config"
	"os"
	"testing"

	_ "github.com/lib/pq"
)

var testQueries *Queries

func TestMain(m *testing.M) {
    conn, err := sql.Open(config.DbDriver(), config.DbSource())
    if err != nil {
        panic(err)
    }

    testQueries = New(conn)

    os.Exit(m.Run())


}
