import mongoose from "mongoose";

const DSRoadmapSchema =  mongoose.Schema({
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


export const DSRoadmap = mongoose.model("DSRoadmap",DSRoadmapSchema);