package server

import (
	"context"
	"main/internal/domain/categories"
	"main/internal/domain/posts"
	"main/internal/domain/threads"
	"main/internal/domain/threadsCategories"
	"main/internal/domain/users"
)

func (s *Server) InitRoutes() {
    ctx := context.Background()
    
    s.router.Mount("/users", users.InitRouter(s.db, ctx))
    s.router.Mount("/categories", categories.InitRouter())
    s.router.Mount("/threads", threads.InitRouter())
    s.router.Mount("/threads-categories", threadsCategories.InitRouter())
    s.router.Mount("/posts", posts.InitRouter())
}

