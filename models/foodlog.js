const mongoose =require("mongoose");


const Schema =mongoose.Schema;
const model =mongoose.model;

const foodlogSchema = new Schema  (
    {
        name :String,
        meal:String,
        wasItGood:Boolean
    },
    {
        timestamps :true
    }
)

const FoodLog = model("FoodLog",foodlogSchema);
module.exports=FoodLog;

