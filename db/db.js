import mongoose from "mongoose";



export const connectDatabase = async() =>{
    try {
      const connection = await mongoose.connect(process.env.MONGO_URI)
      if(connection) console.log("database connected") 
    } catch (error) {
       console.log("error",error)
       process.exit(1) 
    }


     

}