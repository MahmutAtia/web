const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date");

const app = express();
app.set("view engine", "ejs")
app.use(bodyParser({extend:true}))
app.use(express.static("public"));

app.listen(3000, function(){
    console.log("running local server on port 3000");
});


// to do list
let items = ["eat food"];
let items_work = [];


app.get("/", function(req,res){
    
    res.render("list", {
        kindOfDay:date.getDay(),
        works:items
    });
});

app.post("/", function(req,res){
    items.push(req.body.todo)
    res.redirect("/")
})

// about
app.get("/about", 
    function(req,res){
        res.render("about")
    }
)

// work day
app.get("/work", 
 function(req,res){
    res.render("work",
    {
        kindOfDay:date.getDate(),
        works:items_work
    })
 }
)

app.post("/work",
 function(req,res){
    if(req.body.submit === "work"){
        items_work.push(req.body.todo)
    }
    res.render("work",
    {
        kindOfDay:day,
        works:items_work
    }
    )
 }
)