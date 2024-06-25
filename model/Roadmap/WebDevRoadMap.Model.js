import mongoose from "mongoose";

const WebDevRoadmapSchema =  mongoose.Schema({
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


export const WebDevRoadmap = mongoose.model("WebDevRoadmap",WebDevRoadmapSchema);