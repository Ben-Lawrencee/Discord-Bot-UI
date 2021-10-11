package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"sync"
	"time"
)

type Coaster struct { //Coaster data type
	Name         string `json:"name"`
	Manufacturer string `json:"manufacturer"`
	ID           string `json:"ID"`
	InPark       string `json:"InPark"`
	Height       int    `json:"height"`
}

type coasterHandlers struct {
	sync.Mutex //Allows values to be locked
	store map[string]Coaster //Data
}

//Ran on request received. Responds to method in request
func (h *coasterHandlers) coasters(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
		case "GET":
			h.get(w, r)
			return
		case "POST":
			h.post(w, r)
			return
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
			w.Write([]byte("Method not allowed"))
			return
	}
}

func (h *coasterHandlers) getCoaster(w http.ResponseWriter, r *http.Request) {
	parts := strings.Split(r.URL.String(), "/") //Split URL by /
	
	if len(parts) != 3 { //If URL does not fit formatting of '/coasters/{id}'
		w.WriteHeader(http.StatusNotFound) //Write Not Found
		return
	}
	
	h.Lock()
	coaster, ok := h.store[parts[2]]
	h.Unlock()
	
	if !ok { //If provided ID is not in Coasters
		w.WriteHeader(http.StatusNotFound) //Write Not Found
		return
	}

	jsonBytes, err := json.Marshal(coaster) //Attempt to convert selected coaster to json
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Add("content-type", "application/json") //Make packet content json
	w.WriteHeader(http.StatusOK) //Set status to OK
	w.Write(jsonBytes) //Write json to body
}

//Writes content of all coasters to response
func (h *coasterHandlers) get(w http.ResponseWriter, r *http.Request) {
	coasters := make([]Coaster, len(h.store)) //Create local coasters array
	
	h.Lock()
	i := 0
	for _, coaster := range h.store { //Iterate through all coasters in memory store
		coasters[i] = coaster //Append each coaster to local coasters array
		i++
	}
	h.Unlock()

	jsonBytes, err := json.Marshal(coasters) //Attempt to convert local coasters to json
	if err != nil {
		//TODO: Deal with error
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Add("content-type", "application/json") //Make packet content json
	w.WriteHeader(http.StatusOK) //Set status to OK
	w.Write(jsonBytes) //Write json to body
}

//Adds coasters from request to all coasters
func (h *coasterHandlers) post(w http.ResponseWriter, r *http.Request) {
	bodyBytes, err := ioutil.ReadAll(r.Body) //Attempt to read all of body data
	defer r.Body.Close()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError) //Write internal error
		w.Write([]byte(err.Error()))
		return
	}
	
	ct := r.Header.Get("content-type")
	if ct != "application/json" {
		w.WriteHeader(http.StatusUnsupportedMediaType)
		w.Write([]byte(fmt.Sprintf("Need content-type 'application/json', but got '%s'", ct)))
		return
	}
	
	var coaster Coaster
	err = json.Unmarshal(bodyBytes, &coaster) //Convert Json
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
	
	coaster.ID = fmt.Sprintf("%d", time.Now().UnixNano()) //Generate ID
	
	h.Lock()
	h.store[coaster.ID] = coaster //Update store
	defer h.Unlock()
}

func newCoasterHandlers() *coasterHandlers {
	return &coasterHandlers{
		//Initialize store
		store: map[string]Coaster{},
	}
}

//Ran on creation. Sets up API
func main() {
	print("Server initiated!")
	
	coasterHandlers := newCoasterHandlers()
	http.HandleFunc("/coasters", coasterHandlers.coasters)
	http.HandleFunc("/coasters/", coasterHandlers.getCoaster)
	
	err := http.ListenAndServe(":8070", nil)
	if err != nil {
		panic(err)
	}
}
