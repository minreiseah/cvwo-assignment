#!/bin/sh

set -e

echo "run db migration"
# /app/migrate -path /app/migration -database "postgresql://root:toor@postgres15:5432/cvwo_forum?sslmode=disable" -verbose up
/app/migrate -path /app/migration -database "postgres://root:EikF32o3XditPPgEATyjygwVQPyNFRWm@dpg-cesnbgirrk0dan0ldiag-a.singapore-postgres.render.com/db_0b4c" -verbose up

echo "start the backend"
exec "$@"



