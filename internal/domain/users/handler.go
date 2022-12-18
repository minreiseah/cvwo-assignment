package users

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func GetAllUsers(w http.ResponseWriter, r *http.Request) {
    // ctx := r.Context()
    fmt.Fprintln(w, "GetAllUsers")
}

func GetUser(w http.ResponseWriter, r *http.Request) {
    // id := r.URL.Query().Get("id")
    id := chi.URLParam(r, "id")
    fmt.Fprintln(w, id)
}

func CreateUser(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "CreateUser")
}



