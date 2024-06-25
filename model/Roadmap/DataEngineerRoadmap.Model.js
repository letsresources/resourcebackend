import mongoose from "mongoose";

const DERoadmapSchema =  mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    link:{
        type:String
    }

},{timestamps:true})


export const DERoadmap = mongoose.model("DERoadmap",DERoadmapSchema);