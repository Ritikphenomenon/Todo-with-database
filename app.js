/*
to run the projec , you need to install
1-npm package
2-express
3-body-parser
4-ejs
5-mongoose

 */

const express= require("express");

const bodyparser= require("body-parser");

var app=express();

app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo");

const tryschema = new mongoose.Schema({
    name:String
});

const item= mongoose.model("task",tryschema);
/*
const todo = new item({
    name:"create some videos"
});


const todo2 = new item({
    name:"learn dsa"
});


const todo3 = new item({
    name:"learn react"
});


const todo4 = new item({
    name:"become paisa and power"
});


*/

app.get("/",function(req,res){
    item.find().then((results) => {
        res.render("list",{ejes:results});
      }).catch((error) => {
        console.log(error);
      });
})


app.post("/",function(req,res){

    const itemName=req.body.ele1;
    const todo5=new item({
           name:itemName
    });
    todo5.save();
    res.redirect("/");
})

app.post("/delete",function(req,res){
    const checked=req.body.checkbox1;
    item.findByIdAndRemove(checked).then((results) => {
        console.log("deleted");
        res.redirect("/");
      }).catch((error) => {
        console.log(error);
      });
})

app.listen("8000",function(){
    console.log("server is running");
})

