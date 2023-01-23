const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser({extended:true}));
app.use(express.static(__dirname +"/public"));  


// port 3000
app.listen(3000, function(){
    console.log("running on 3000 report")
})


// index get
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html")
})

// index post
app.post("/", function(req,res){
    res.send(console.log(req.body))
})