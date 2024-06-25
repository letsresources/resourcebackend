import mongoose from "mongoose";


const FeatureDsaResourcesModel = mongoose.Schema({
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




export const DsaResourcesFeature = mongoose.model('DsaResourcesFeature',FeatureDsaResourcesModel);
