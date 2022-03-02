const Log = require("../models/log");



exports.mainRoute = (req,res)=>{
    res.render("logs/MainPage.jsx");
};



exports.indexRoute = (req,res) => {

    Log.find( {} , (err,foundLogs)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.render("logs/Index.jsx" ,{
                logs:foundLogs
            });
        }
    })
    
}





exports.newRoute = (req,res) => {
    res.render ("logs/New.jsx");
  };




  exports.createRoute = (req,res)=>{
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
    
};




exports.deleteRoute =(req,res) =>{
    Log.findByIdAndDelete (req.params.id,(err,deleteLog)=>{
        if(err) {
            send.status(400).send(err);
        } else {
            res.redirect("/logs");
        }
    })
}



exports.editRoute = (req,res)=>{
    Log.findById(req.params.id , (err,foundLog) =>{
        if(err) {

        }else {
            res.render ("logs/Edit.jsx" , {
                log :foundLog 
            })
        }
    })
}

exports.showRoute = (req,res)=>{
    Log.findById (req.params.id , (err,foundLog) =>{
        if (err) {
            res.status(400).send(err);
        }else {
            res.render("logs/Show.jsx",{
                log :foundLog
            })
        }
    })
  }



  exports.updateRoute =(req,res)=>{
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
}