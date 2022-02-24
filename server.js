// load express 
const express = require("express");
const app = express();


//mvc setup 
//views 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//induces 
//index 
app.get("/", (req,res) =>{
    res.send("welcome to captain log ");
})


//new
app.get("/new", (req,res) => {
  res.render ("New.jsx");
})

//delete



//update



//create
app.post("/logs" , (req,res)=>{
    res.send ("received")
})

//edit



//show


app.listen(3000,()=>{
    console.log("listening to port 3000")
})