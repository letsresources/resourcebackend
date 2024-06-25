import mongoose from "mongoose";


const FeatureNodejsModel = mongoose.Schema({
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




export const NodejsFeature = mongoose.model('NodejsFeature',FeatureNodejsModel);
