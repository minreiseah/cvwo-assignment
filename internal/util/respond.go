package util

import (
	"encoding/json"
	"log"
	"net/http"
)

func Respond(w http.ResponseWriter, statusCode int, payload interface{}) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(statusCode)

    if payload == nil {
        return
    }

    data, err := json.Marshal(payload)

    if err != nil {
        log.Println(err)
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    _, err = w.Write(data)
    if err != nil {
        log.Println(err)
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }


}
