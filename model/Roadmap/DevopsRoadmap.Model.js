import mongoose from "mongoose";

const DevopsRoadmapSchema =  mongoose.Schema({
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


export const DevopsRoadmap = mongoose.model("DevopsRoadmap",DevopsRoadmapSchema);