import mongoose from "mongoose";

const RoadMapSchema =  mongoose.Schema({
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


export const Roadmap = mongoose.model("Roadmap",RoadMapSchema);