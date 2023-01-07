package config

// import "fmt"

type Database struct {
    Driver string
    Host string
    Port int
    User string
    Password string
    Dbname string
}

/*
* DBSource provided by Render
*/
func DbSource() string {
    // TODO IMPORT FROM ENV INSTEAD 

    // const (
    //     // host     = "localhost"
    //     host     = "postgres15"
    //     port     = 5432
    //     user     = "root"
    //     password = "toor"
    //     dbname   = "cvwo_forum"
    // )
    //
    // return fmt.Sprintf("host=%s port=%d user=%s "+
    //     "password=%s dbname=%s sslmode=disable",
    //     host, port, user, password, dbname)

    const dbSource = "postgres://root:EikF32o3XditPPgEATyjygwVQPyNFRWm@dpg-cesnbgirrk0dan0ldiag-a.singapore-postgres.render.com/db_0b4c"
    return dbSource
}

func DbDriver() string {
    return "postgres"
}

