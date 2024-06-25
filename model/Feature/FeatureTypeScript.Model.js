import mongoose from "mongoose";


const FeatureTypeScriptModel = mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    link:{
        type:String
    }
},{timeStamps:true})




export const typescriptFeature = mongoose.model('typescriptbFeature',FeatureTypeScriptModel);