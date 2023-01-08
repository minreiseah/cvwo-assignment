package config

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

/*
* DBSource defined in environment
 */
func DbSource() string {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    dbSource := os.Getenv("DB_SOURCE")

    if dbSource == "" {
        fmt.Println("DB_SOURCE environment variable not set")
    } else {
        fmt.Println("DB_SOURCE:", dbSource)
    }

    return dbSource
}

func DbDriver() string {
    return "postgres"
}

// migration
func MigrationURL() string {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    migrationURL := os.Getenv("MIGRATION_URL")

    if migrationURL == "" {
        fmt.Println("DB_SOURCE environment variable not set")
    } else {
        fmt.Println("DB_SOURCE:", migrationURL)
    }

    return migrationURL

}
