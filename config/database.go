package config

import "fmt"

type Database struct {
    Driver string
    Host string
    Port int
    User string
    Password string
    Dbname string
}

func DbSource() string {
    const (
        host     = "localhost"
        port     = 5432
        user     = "root"
        password = "toor"
        dbname   = "postgres"
    )

    return fmt.Sprintf("host=%s port=%d user=%s "+
        "password=%s dbname=%s sslmode=disable",
        host, port, user, password, dbname)
}

func DbDriver() string {
    return "postgres"
}
