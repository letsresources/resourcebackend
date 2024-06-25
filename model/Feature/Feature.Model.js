import mongoose from "mongoose";

const FeatureModel = mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    link:{
        type:String
    }

})





export const Feature = mongoose.model("Favourite",FeatureModel); 