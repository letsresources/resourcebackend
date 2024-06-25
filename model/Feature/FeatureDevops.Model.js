import mongoose from "mongoose";


const FeatureDevOpsModel = mongoose.Schema({
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




export const devopsFeature = mongoose.model('devopsFeature',FeatureDevOpsModel);