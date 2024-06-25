import mongoose from "mongoose";


const FeatureComputerNetworkModel = mongoose.Schema({
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




export const ComputerNetworkFeature = mongoose.model('ComputerNetworkFeature',FeatureComputerNetworkModel);
