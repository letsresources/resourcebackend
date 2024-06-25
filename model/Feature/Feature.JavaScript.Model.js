import mongoose from "mongoose";


const FeatureJavaScriptModel = mongoose.Schema({
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




export const JavaScriptFeature = mongoose.model('JavaScriptFeature',FeatureJavaScriptModel);
