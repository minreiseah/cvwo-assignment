package server

import (
	"main/internal/domain/categories"
	"main/internal/domain/posts"
	"main/internal/domain/threads"
	"main/internal/domain/threadsCategories"
	"main/internal/domain/users"
)

func (s *Server) InitRoutes() {
    s.router.Mount("/users", users.InitRouter())
    s.router.Mount("/categories", categories.InitRouter())
    s.router.Mount("/threads", threads.InitRouter())
    s.router.Mount("/threads-categories", threadsCategories.InitRouter())
    s.router.Mount("/posts", posts.InitRouter())
}

