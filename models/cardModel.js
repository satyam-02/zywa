const mongoose=require("mongoose");

const loginSchema=mongoose.Schema({
    id:{
        type:String,
        required:[true,"Please add the card id"],
    },

}, {
    timestamps:true,
})

module.exports=mongoose.model("Login",loginSchema);