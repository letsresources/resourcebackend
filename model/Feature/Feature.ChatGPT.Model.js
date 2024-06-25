import mongoose from "mongoose";


const FeatureChatGPTModel = mongoose.Schema({
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




export const ChatGPTFeature = mongoose.model('ChatGPTFeature',FeatureChatGPTModel);
