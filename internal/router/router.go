package router

import (
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func New () *chi.Mux {
    r := chi.NewRouter()

    // A good base middleware stack
    r.Use(middleware.RequestID)
    r.Use(middleware.RealIP)
    r.Use(middleware.Logger)
    r.Use(middleware.Recoverer)

    r.Use(middleware.Timeout(60 * time.Second))

    return r
}
