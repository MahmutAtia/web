const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended : true}));                            
//port
app.listen(3000, function() {
console.log("running server on 3000 port")    
})


// get
app.get("/", function(req,res){
    res.sendFile(__dirname+"/"+"index.html")
})

//post
app.post("/",function(req,res){
    let num1 = parseFloat(req.body.num1);
    let num2 = parseFloat(req.body.num2);
    let result = num1+num2;


    res.send("the result equals "+ result ); 
})

// get bmi
app.get("/bmi", function(req,res){
    res.sendFile(__dirname+"/bmi.html")
})

// post bmi
app.post("/bmi", function(req,res){
    let num1 = parseFloat(req.body.w);
    let num2 = parseFloat(req.body.h);
    let result = num1 / num2**2;
    res.send(result) 
})