import mongoose from "mongoose";


const FeatureRemoteHiringModel = mongoose.Schema({
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




export const RemoteHiringFeature = mongoose.model('RemoteHiringFeature',FeatureRemoteHiringModel);

