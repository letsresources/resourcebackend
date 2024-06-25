import mongoose from "mongoose";


const FeatureJavaModel = mongoose.Schema({
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




export const JavaFeature = mongoose.model('JavaFeature',FeatureJavaModel);
