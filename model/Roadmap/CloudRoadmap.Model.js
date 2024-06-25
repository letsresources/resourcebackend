import mongoose from "mongoose";

const CloudRoadmapSchema =  mongoose.Schema({
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


export const CloudRoadmap = mongoose.model("CloudRoadmap",CloudRoadmapSchema);