import mongoose from "mongoose";


const FeatureC_ProgramModel = mongoose.Schema({
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




export const C_ProgramFeature = mongoose.model('C_ProgramFeature',FeatureC_ProgramModel);
