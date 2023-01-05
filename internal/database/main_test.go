package db

import (
	"database/sql"
	"fmt"
	"main/config"
	"os"
	"testing"

	_ "github.com/lib/pq"
)

var testQueries *Queries

const (
    host     = "localhost" // test seems to need to connect to localhost
    port     = 5432
    user     = "root"
    password = "toor"
    dbname   = "cvwo_forum"
)


func TestMain(m *testing.M) {
    conn, err := sql.Open(config.DbDriver(), 
        fmt.Sprintf("host=%s port=%d user=%s "+
                    "password=%s dbname=%s sslmode=disable",
                    host, port, user, password, dbname))

    if err != nil {
        panic(err)
    }

    testQueries = New(conn)

    os.Exit(m.Run())


}
