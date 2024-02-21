import mongoose from "mongoose"

const userschema=new mongoose.Schema(
    {
       username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
       },
       password:{
        type:String,
        unique:true,
        required:true
       },
       email:{
        type:String,
        unique:true,
        required:true
       }
    },
    {timestamps:true})
const User=mongoose.model("User" ,userschema)
 export default User