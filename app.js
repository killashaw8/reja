console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
 


 
// MongoDB Atlas

const db = require("./server").db();

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
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if (err) {
            console.log(err);
            res.end('something went wrong');
        } else {
            res.end('succesfully added');
        }
    });
}); 

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end('something went wrong');
        } else {
            res.render("rejalar", { items: data });
        }
    })
});  

// app.get("/author", (req, res) => {
//     res.render("author", { user: user });
// });
  
module.exports = app;
 
 










// PATTERN: Architecture (MVC) vs Design Pattern (Middleware)



// FRONTEND =>  

/* API REQUEST
   TYPE: Traditional API | Rest API | GraphQL API 
   METHOD: GET vs POST
   STRUCTURE: Header vs Body
*/