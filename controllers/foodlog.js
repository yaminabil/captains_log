const FoodLog = require("../models/foodlog");



exports.indexRoute =(req,res)=>{

    FoodLog.find ( {}, (err,foodLogsFound)=>{
        if (err) {
             res.status(400).send(err);
        } else {
            console.log (foodLogsFound);
            res.render("foodlogs/Index.jsx" , {
                foodlogs:foodLogsFound 
            });

        }
    })
  
};


exports.newRoute=(req,res)=>{
    res.render("foodlogs/New.jsx");
}


exports.showRoute=(req,res)=>{
   

    FoodLog.findById (req.params.id,  (err,foodLogFound)=>{
        if(err) {
            res.status(400).send(err);
        }else {
            res.render("foodlogs/Show.jsx" , {
                foodlog:foodLogFound
            });
        }
    })

    
}

exports.createRoute = (req,res)=>{
if(req.body.wasItGood === 'on') {
    req.body.wasItGood =true;
}else {
    req.body.wasItGood =false;
}

FoodLog.create (req.body , (err,createdFoodlog)=> {
    if(err) {
        res.status(403).send(err);
    } else {
        console.log(createdFoodlog);
        res.redirect(`/foodlog/${createdFoodlog._id}`)
            
       
    }
})
  
}


exports.deleteRoute = (req,res)=>{

    FoodLog.findByIdAndDelete ( req.params.id , (err,foodlogDeleted) => {
        if(err) {

        } else {
            res.redirect ("/foodlog");
        }
    })
}

exports.editRoute = (req,res)=> {
   FoodLog.findById (req.params.id , (err,foodlogfound) => {
       if (err) {
        res.status(400).send(err);
       } else {
           
           res.render ("foodlogs/Edit.jsx" , {
               foodlog:foodlogfound
           })
       }
   })

}

exports.updateRoute = (req,res) =>{
   

    if (req.body.wasItGood === "on") {
        req.body.wasItGood = true;
    } else {
        req.body.wasItGood =false ;
    }
    

    FoodLog.findByIdAndUpdate( req.params.id , req.body , {new:true} , (err,updatedfoodlog)=>{
        if (err) {
            res.status(400).send(err);
        } else {
            
            res.redirect(`/foodlog/${updatedfoodlog._id}`);
        }
    })
}


