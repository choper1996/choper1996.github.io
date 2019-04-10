package main

import (
	"fmt"
	"net/http"
	"html/template"
)

func main()  {
	fmt.Println("Listening on port :3000")
	http.HandleFunc("/", indexHandle)
	http.ListenAndServe(":3000", nil)
}

func indexHandle(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("template/index.html", "template/header.html", "template/footer.html")
	if err != nil {
		fmt.Fprint(w, err.Error())
	}
	t.ExecuteTemplate(w, "index", posts)
}