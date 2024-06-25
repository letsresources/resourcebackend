import mongoose from "mongoose";


const FeatureRoadMapsModel = mongoose.Schema({
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




export const RoadMapsFeature = mongoose.model('RoadMapsFeature',FeatureRoadMapsModel);

