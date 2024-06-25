import mongoose from "mongoose";


const FeatureBigDataModel = mongoose.Schema({
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




export const BigDataFeature = mongoose.model('BigDataFeature',FeatureBigDataModel);
