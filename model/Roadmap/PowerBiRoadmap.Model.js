import mongoose from "mongoose";

const PowerBiRoadmapSchema =  mongoose.Schema({
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


export const PowerBiRoadmap = mongoose.model("PowerBiRoadmap",PowerBiRoadmapSchema);