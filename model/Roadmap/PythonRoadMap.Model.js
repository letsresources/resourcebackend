import mongoose from "mongoose";

const PythonRoadmapSchema =  mongoose.Schema({
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


export const PythonRoadmap = mongoose.model("PythonRoadmap",PythonRoadmapSchema);