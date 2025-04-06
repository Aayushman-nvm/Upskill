const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    githubId:{type:String,unique:true},
    name:String,
    email:String,
});

module.exports=mongoose.model("User",UserSchema);