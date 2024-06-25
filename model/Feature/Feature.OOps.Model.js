import mongoose from "mongoose";


const FeatureOOpsModel = mongoose.Schema({
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




export const OOpsFeature = mongoose.model('OOpsFeature',FeatureOOpsModel);
