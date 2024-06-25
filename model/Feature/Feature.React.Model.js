import mongoose from "mongoose";


const FeatureReactModel = mongoose.Schema({
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




export const ReactFeature = mongoose.model('ReactFeature',FeatureReactModel);
