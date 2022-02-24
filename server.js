// load express 
const express = require("express");
const app = express();


//mvc setup 
//views 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//middleware
app.use (express.urlencoded({extended : true}));
app.use ( (req,res,next)=> {
    console.log (req.body) ; 
    next () ;
})


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
    if (req.body.shipIsBroken === "on"){
        req.body.shipIsBroken =true; 
    }else {
        req.body.shipIsBroken =false; 
    }
    res.send (req.body);
})

//edit



//show


app.listen(3000,()=>{
    console.log("listening to port 3000")
})