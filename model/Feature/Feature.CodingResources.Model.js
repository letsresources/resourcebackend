
import mongoose from "mongoose";


const FeatureCodingResourcesModel = mongoose.Schema({
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




export const CodingResourcesFeature = mongoose.model('CodingResourcesFeature',FeatureCodingResourcesModel);
