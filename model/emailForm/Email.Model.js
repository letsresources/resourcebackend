import mongoose from "mongoose";

const EmailSchema = mongoose.Schema({
    email:{
        type:String
    },
    name:{
        type:String
    },
    topic:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
},{timestamps:true})


export const EmailModel =  mongoose.model("emailmodel",EmailSchema);