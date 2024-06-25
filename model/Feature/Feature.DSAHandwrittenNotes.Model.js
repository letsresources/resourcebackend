import mongoose from "mongoose";


const FeatureDSAHandwrittenNotesModel = mongoose.Schema({
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




export const DSAHandwrittenNotesFeature = mongoose.model('DSAHandwrittenNotesFeature',FeatureDSAHandwrittenNotesModel);
