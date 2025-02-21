console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        user = JSON.parse(data);
    }
});

//1: Kirish code       Middleware DP (Design Pattern) app.use

app.use(express.static("public"));                   // Public folderlar browser requesti uchun ochiq
app.use(express.json());                             // JSON formatdagi malumotlarni object sifatida qabul qilish
app.use(express.urlencoded({ extended: true }));     // Formdan kelgan malumotlarni qabul qilish





//2: Session code

//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


//4: Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "Success"});
});

app.get("/", function (req, res) {
    res.render('harid');
});

app.get("/author", (req, res) => {
    res.render("author");
});

const server = http.createServer(app);
let port = 4000;
server.listen(port, function () {
    console.log(`The server is running successfully on port ${port}`);
})












// PATTERN: Architecture (MVC) vs Design Pattern (Middleware)



// FRONTEND =>  

/* API REQUEST
   TYPE: Traditional API | Rest API | GraphQL API 
   METHOD: GET vs POST
   STRUCTURE: Header vs Body
*/