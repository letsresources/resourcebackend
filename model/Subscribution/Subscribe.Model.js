import mongoose from "mongoose";


const EmailSchema = mongoose.Schema({
    email:{
        type:String
    }
},{timestamps:true})




export const Email = mongoose.model("email",EmailSchema)