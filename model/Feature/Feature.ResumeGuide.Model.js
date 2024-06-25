import mongoose from "mongoose";


const FeatureResumeGuideModel = mongoose.Schema({
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




export const ResumeGuideFeature = mongoose.model('ResumeGuideFeature',FeatureResumeGuideModel);

