require("dotenv").config();
console.log (process.env.MONGO_URI);

// load express 
const express = require("express");
const { send } = require("express/lib/response");
const methodOverride =require("method-override");
const mongoose=require("mongoose");
const app = express();



//require the models 
const Log = require("./models/log");




//mvc setup 
//views 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//models 
mongoose.connect (process.env.MONGO_URI , { 
    useNewUrlParser : true ,
    useUnifiedTopology : true
})





//middleware
app.use (express.urlencoded({extended : true}));
app.use ( (req,res,next)=> {
    console.log (req.body) ; 
    next () ;
})

app.use(methodOverride("_method"));


//induces 
//index 
app.get("/logs", (req,res) =>{

    Log.find( {} , (err,foundLogs)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.render("Index.jsx" ,{
                logs:foundLogs
            });
        }
    })
    
})


//new
app.get("/logs/new", (req,res) => {
  res.render ("New.jsx");
})

//delete
app.delete("/logs/:id" ,(req,res) =>{
    Log.findByIdAndDelete (req.params.id,(err,deleteLog)=>{
        if(err) {
            send.status(400).send(err);
        } else {
            res.redirect("/logs");
        }
    })
})


//update
app.put("/logs/:id" ,(req,res)=>{
    if (req.body.shipIsBroken === "on"){
        req.body.shipIsBroken=true;
    } else {
        req.body.shipIsBroken=false;
    }
    Log.findByIdAndUpdate (req.params.id , req.body , {new:true} , (err,updatedLog)=>{
        if(err) {
            res.status(400).send(err);
        }else {
            res.redirect(`/show/${req.params.id}`)
        }
    })
})


//create

app.post("/logs" , (req,res)=>{
    if (req.body.shipIsBroken === "on"){
        req.body.shipIsBroken =true; 
    }else {
        req.body.shipIsBroken =false; 
    }

    Log.create(req.body, (err,createdLog) =>{
        if (err) {
            res.status(403).send(err);
        }else {
            console.log (createdLog);
            res.redirect(`/show/${createdLog._id}`)
        }

    })
    
})

//edit
app.get ("/logs/:id/edit" ,(req,res)=>{
    Log.findById(req.params.id , (err,foundLog) =>{
        if(err) {

        }else {
            res.render ("Edit.jsx" , {
                log :foundLog 
            })
        }
    })
})


//show

app.get("/show/:id",(req,res)=>{
  Log.findById (req.params.id , (err,foundLog) =>{
      if (err) {
          res.status(400).send(err);
      }else {
          res.render("Show",{
              log :foundLog
          })
      }
  })
})








app.listen(3000,()=>{
    console.log("listening to port 3000")
})