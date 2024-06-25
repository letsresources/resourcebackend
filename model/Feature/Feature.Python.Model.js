import mongoose from "mongoose";


const FeaturePythonModel = mongoose.Schema({
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




export const PythonFeature = mongoose.model('PythonFeature',FeaturePythonModel);
