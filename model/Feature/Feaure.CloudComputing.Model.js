
import mongoose from "mongoose";


const FeatureCloudComputingModel = mongoose.Schema({
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




export const CloudComputingFeature = mongoose.model('CloudComputingFeature',FeatureCloudComputingModel);
