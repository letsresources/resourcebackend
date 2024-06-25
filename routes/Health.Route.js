import express from "express"


const HealthRoute = express.Router()



HealthRoute.get("/health",async(_req,res)=>{
    return res.status(200).json({"message":"success"})
})




export default HealthRoute