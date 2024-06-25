import express from "express";
import {Project} from "../model/Project/Project.Model.js"
import { getData,postData } from "../controller/Main.Controller.js";



const ProjectRouter = express.Router()




// get and post project card route
ProjectRouter.get("/api/v1/project",async(req,res)=>{
    await getData(req,res,Project)
});
ProjectRouter.post("/api/v1/postproject",async(req,res)=>{
    await postData(req,res,Project)
});







export default ProjectRouter