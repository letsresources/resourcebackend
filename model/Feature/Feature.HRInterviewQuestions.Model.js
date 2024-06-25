import mongoose from "mongoose";


const FeatureHRInterviewQuestionsModel = mongoose.Schema({
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




export const HRInterviewQuestionsFeature = mongoose.model('HRInterviewQuestionsFeature',FeatureHRInterviewQuestionsModel);
