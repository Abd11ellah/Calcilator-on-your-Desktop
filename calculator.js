const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
    })
app.post("/",function(req,res){
    
    var soso=Number(req.body.n1)+Number(req.body.n2);
        res.send(""+soso)
    })
app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})
app.post("/bmiCalculator",function(req,res){
    var height=parseFloat(req.body.number1);
    var weight=parseFloat(req.body.number2);
    var bmiRes= weight/(height*height);
    res.send("your bmi is "+bmiRes)
    
})
app.listen(3000,function(){
    console.log("the surver is running !")
})