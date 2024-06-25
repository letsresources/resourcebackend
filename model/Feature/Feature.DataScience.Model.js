import mongoose from "mongoose";


const FeatureDataScienceModel = mongoose.Schema({
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




export const DataScienceFeature = mongoose.model('DataScienceFeature',FeatureDataScienceModel);
