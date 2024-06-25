import mongoose from "mongoose";


const FeatureDataEngineerModel = mongoose.Schema({
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




export const DataEngineerFeature = mongoose.model('DataEngineerFeature',FeatureDataEngineerModel);
