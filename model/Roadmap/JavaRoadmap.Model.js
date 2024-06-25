import mongoose from "mongoose";

const JavaRoadmapSchema =  mongoose.Schema({
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


export const JavaRoadmap = mongoose.model("JavaRoadmap",JavaRoadmapSchema);