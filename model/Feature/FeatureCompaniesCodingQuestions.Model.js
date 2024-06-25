import mongoose from "mongoose";


const FeatureCompaniesCodingQuestionsModel = mongoose.Schema({
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




export const CompaniesCodingQuestionsFeature = mongoose.model('CompaniesCodingQuestionsFeature',FeatureCompaniesCodingQuestionsModel);