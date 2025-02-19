console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1: Kirish code
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

const server = http.createServer(app);
let port = 3000;
server.listen(port, function () {
    console.log(`The server is running successfully on port ${port}`);
})