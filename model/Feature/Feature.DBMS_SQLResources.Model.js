
import mongoose from "mongoose";


const FeatureDBMS_SQLResourcesModel = mongoose.Schema({
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




export const DBMS_SQLResourcesFeature = mongoose.model('DBMS_SQLResourcesFeature',FeatureDBMS_SQLResourcesModel);
