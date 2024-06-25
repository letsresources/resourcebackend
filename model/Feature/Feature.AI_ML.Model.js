import mongoose from "mongoose";


const FeatureAI_MLModel = mongoose.Schema({
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




export const AI_MLFeature = mongoose.model('AI_MLFeature',FeatureAI_MLModel);
