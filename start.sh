#!/bin/sh

set -e

echo "run db migration"
/app/migrate -path /app/migration -database "postgresql://root:toor@postgres15:5432/cvwo_forum?sslmode=disable" -verbose up

echo "start the backend"
exec "$@"
