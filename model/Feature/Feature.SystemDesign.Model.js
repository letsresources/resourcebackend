import mongoose from "mongoose";


const FeatureSystemDesignModel = mongoose.Schema({
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




export const SystemDesignFeature = mongoose.model('SystemDesignFeature',FeatureSystemDesignModel);