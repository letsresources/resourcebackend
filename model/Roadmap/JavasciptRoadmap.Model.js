import mongoose from "mongoose";

const JavaScriptRoadmapSchema =  mongoose.Schema({
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


export const JavaScriptRoadmap = mongoose.model("JavaScriptRoadmap",JavaScriptRoadmapSchema);