import express from "express";
import {getData, postData} from "../controller/Main.Controller.js"
import { Roadmap } from "../model/Roadmap/RoadMap.Model.js";
import { WebDevRoadmap } from "../model/Roadmap/WebDevRoadMap.Model.js";
import {PythonRoadmap} from "../model/Roadmap/PythonRoadMap.Model.js";
import { PowerBiRoadmap } from "../model/Roadmap/PowerBiRoadmap.Model.js";
import {JavaScriptRoadmap} from "../model/Roadmap/JavasciptRoadmap.Model.js";
import {JavaRoadmap} from "../model/Roadmap/JavaRoadmap.Model.js";
import {DevopsRoadmap} from "../model/Roadmap/DevopsRoadmap.Model.js";
import {DSRoadmap} from "../model/Roadmap/DataScienceRoadmap.Model.js";
import {CloudRoadmap} from "../model/Roadmap/CloudRoadmap.Model.js";
import {DERoadmap} from "../model/Roadmap/DataEngineerRoadmap.Model.js";
import {cache} from "../cache/redis/redis.js";




const RoadMapRouter = express.Router();

// get the roadmaps
RoadMapRouter.get("/api/v1/roadmaps",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
       await getData(req,res,Roadmap)    
})
RoadMapRouter.post("/api/v1/postroadmaps",async(req,res)=>{

    await postData(req,res,Roadmap)
})


// roadmaps routes web dev

RoadMapRouter.get("/api/v1/webdevroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,WebDevRoadmap)
});
RoadMapRouter.post("/api/v1/postwebdevroadmap",async(req,res)=>{
    await postData(req,res,WebDevRoadmap)
})

// roadmaps routes python

RoadMapRouter.get("/api/v1/pythonroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,PythonRoadmap)
})

RoadMapRouter.post("/api/v1/postpythonroadmap",async(req,res)=>{
    await postData(req,res,PythonRoadmap)
})


// roadmaps routes powerbi

RoadMapRouter.get("/api/v1/powerbiroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,PowerBiRoadmap)
})

RoadMapRouter.post("/api/v1/postpowerbiroadmap",async(req,res)=>{
    await postData(req,res,PowerBiRoadmap)
})


// roadmaps routes Javascript

RoadMapRouter.get("/api/v1/jsroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,JavaScriptRoadmap)
})

RoadMapRouter.post("/api/v1/postjsroadmap",async(req,res)=>{
    await postData(req,res,JavaScriptRoadmap)
})


// roadmap routes java 
RoadMapRouter.get("/api/v1/javaroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,JavaRoadmap)
})

RoadMapRouter.post("/api/v1/postjavaroadmap",async(req,res)=>{
    await postData(req,res,JavaRoadmap)
})



// roadmap routes  devops 
RoadMapRouter.get("/api/v1/devopsroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,DevopsRoadmap)
})

RoadMapRouter.post("/api/v1/postdevopsroadmap",async(req,res)=>{
    await postData(req,res,DevopsRoadmap)
})


// roadmap routes data science

RoadMapRouter.get("/api/v1/dsroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,DSRoadmap)
})

RoadMapRouter.post("/api/v1/postdsroadmap",async(req,res)=>{
    await postData(req,res,DSRoadmap)
})



// roadmap routes cloud
RoadMapRouter.get("/api/v1/cloudroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,CloudRoadmap)

})

RoadMapRouter.post("/api/v1/postcloudroadmap",async(req,res)=>{
    await postData(req,res,CloudRoadmap)
})


// roadmap routes data engineer
RoadMapRouter.get("/api/v1/deroadmap",cache.route({name:"backend",expire:60*30}),async(req,res)=>{
    await getData(req,res,DERoadmap)
})

RoadMapRouter.post("/api/v1/postderoadmap",async(req,res)=>{
    await getData(req,res,DERoadmap)
})








export default RoadMapRouter