require("dotenv").config();
console.log (process.env.MONGO_URI);

// load express 
const express = require("express");
const { send } = require("express/lib/response");
const methodOverride =require("method-override");
const mongoose=require("mongoose");
const app = express();
app.use(express.static('public'));



//require the models 
const Log = require("./models/log");
const FoodLog =require("./models/foodlog");
const Food = require("./data/seed");




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
const logConrollers =require("./controllers/logs.js");


// main page 

app.get("/",logConrollers.mainRoute);



//index 

app.get("/logs", logConrollers.indexRoute);


//new
app.get("/logs/new", logConrollers.newRoute);
//delete
app.delete("/logs/:id" ,logConrollers.deleteRoute);
//update
app.put("/logs/:id" ,logConrollers.updateRoute)
//create
app.post("/logs" , logConrollers.createRoute);
//edit
app.get ("/logs/:id/edit" ,logConrollers.editRoute);
//show
app.get("/show/:id",logConrollers.showRoute);


// bonus 
// The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs



const foodLogController = require ("./controllers/foodlog");



//induces

//index 
app.get("/foodlog" , foodLogController.indexRoute);
//new 
app.get ("/foodlog/new",foodLogController.newRoute);
//delete
app.delete("/foodlog/:id",foodLogController.deleteRoute);
//update
app.put("/foodlog/:id",foodLogController.updateRoute);

//create
app.post("/foodlog",foodLogController.createRoute);

//edit
app.get("/foodlog/:id/edit" ,foodLogController.editRoute);


//show
app.get("/foodlog/:id",foodLogController.showRoute);


// insert my data 
// const { db } = require("./models/log");

// FoodLog.insertMany(Food)
// .then((food)=>{
//     console.log(food)
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     db.close();
// })




app.listen(3000,()=>{
    console.log("listening to port 3000")
})