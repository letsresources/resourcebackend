import mongoose from "mongoose";


const FeatureCheetSheetModel = mongoose.Schema({
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




export const CheetSheetFeature = mongoose.model('CheetSheetFeature',FeatureCheetSheetModel);
