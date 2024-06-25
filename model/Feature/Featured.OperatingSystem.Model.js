import mongoose from "mongoose";


const FeatureOperatingSystemModel = mongoose.Schema({
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




export const OperatingSystemFeature = mongoose.model('OperatingSystemFeature',FeatureOperatingSystemModel);
