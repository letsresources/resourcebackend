import mongoose from "mongoose";


const FeatureStartupListModel = mongoose.Schema({
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




export const StartupListFeature = mongoose.model('StartupListFeature',FeatureStartupListModel);