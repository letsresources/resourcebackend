import { Router } from "express";
import { cache } from "../cache/redis/redis.js";

import { getData, postData } from "../controller/Main.Controller.js";
import { Feature } from "../model/Feature/Feature.Model.js";
import { devopsFeature } from "../model/Feature/FeatureDevops.Model.js";
import { typescriptFeature } from "../model/Feature/FeatureTypeScript.Model.js";
import { webFeature } from "../model/Feature/FeatureWebDev.Model.js";
import { BigDataFeature } from '../model/Feature/Feature.BigData.Model.js';
import { C_ProgramFeature } from '../model/Feature/Feature.C_Program.Model.js';
import { ChatGPTFeature } from '../model/Feature/Feature.ChatGPT.Model.js';
import { CheetSheetFeature } from '../model/Feature/Feature.CheetSheet.Model.js';
import { CodingResourcesFeature } from '../model/Feature/Feature.CodingResources.Model.js';
import { ComputerNetworkFeature } from '../model/Feature/Feature.ComputerNetwork.model.js';
import { DataEngineerFeature } from '../model/Feature/Feature.DataEngineer.Model.js';
import { DataScienceFeature } from '../model/Feature/Feature.DataScience.Model.js';
import { DBMS_SQLResourcesFeature } from '../model/Feature/Feature.DBMS_SQLResources.Model.js';
import { DSAHandwrittenNotesFeature } from '../model/Feature/Feature.DSAHandwrittenNotes.Model.js';
import { DsaResourcesFeature } from '../model/Feature/Feature.DsaResources.Model.js';
import { HRInterviewQuestionsFeature } from '../model/Feature/Feature.HRInterviewQuestions.Model.js';
import { JavaFeature } from '../model/Feature/Feature.Java.Model.js';
import { JavaScriptFeature } from '../model/Feature/Feature.JavaScript.Model.js';
import { NodejsFeature } from '../model/Feature/Feature.Nodejs.Model.js';
import { OOpsFeature } from '../model/Feature/Feature.OOps.Model.js';
import { PythonFeature } from '../model/Feature/Feature.Python.Model.js';
import { ReactFeature } from '../model/Feature/Feature.React.Model.js';
import { RemoteHiringFeature } from '../model/Feature/Feature.RemoteHiring.Model.js';
import { ResumeGuideFeature } from '../model/Feature/Feature.ResumeGuide.Model.js';
import { RoadMapsFeature } from '../model/Feature/Feature.RoadMaps.Model.js';
import { StartupListFeature } from '../model/Feature/Feature.StartupList.Model.js';
import { SystemDesignFeature } from '../model/Feature/Feature.SystemDesign.Model.js';
import { CompaniesCodingQuestionsFeature } from '../model/Feature/FeatureCompaniesCodingQuestions.Model.js';
import { OperatingSystemFeature } from '../model/Feature/Featured.OperatingSystem.Model.js';
import { CloudComputingFeature } from '../model/Feature/Feaure.CloudComputing.Model.js';


const Featureroute = Router()



Featureroute.get("/api/v1/feature", cache.route({name:'backend',expire:60*60*60}),async(req,res)=>{
    await getData(req,res,Feature);
})
Featureroute.post("/api/v1/postfeature",async(req,res)=>{
    await postData(req,res,Feature);
})


// web devlopment route
Featureroute.get("/api/v1/webdev",cache.route({name:'backend',expire:60*60*60}),async(req,res)=>{
    await getData(req,res,webFeature);
});
Featureroute.post("/api/v1/postwebdev",async(req,res)=>{
    await postData(req,res,webFeature);
});


// typescript route
Featureroute.get("/api/v1/typescript",cache.route({name:'backend',expire:60*60*60}),async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/posttypescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});


// devops route
Featureroute.get("/api/v1/devops",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, devopsFeature);
});

Featureroute.post("/api/v1/postdevops", async (req, res) => {
    await postData(req, res, devopsFeature);
});


// AI_ML route
Featureroute.get("/api/v1/ai",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, AI_MLFeature);
});

Featureroute.post("/api/v1/POSTAI_ML", async (req, res) => {
    await postData(req, res, AI_MLFeature);
});


// BigData route
Featureroute.get("/api/v1/bigdata",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, BigDataFeature);
});

Featureroute.post("/api/v1/postBigData", async (req, res) => {
    await postData(req, res, BigDataFeature);
});


// C_Progran route
Featureroute.get("/api/v1/cpluplus",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, C_ProgramFeature);
});

Featureroute.post("/api/v1/postC_Program", async (req, res) => {
    await postData(req, res, C_ProgramFeature);
});


// chatgpt route
Featureroute.get("/api/v1/chatgpt",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, ChatGPTFeature);
});

Featureroute.post("/api/v1/postChatGPT", async (req, res) => {
    await postData(req, res, ChatGPTFeature);
});


// CheetSheet route
Featureroute.get("/api/v1/cheetSheets",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, CheetSheetFeature);
});

Featureroute.post("/api/v1/postCheetSheet", async (req, res) => {
    await postData(req, res, ChatGPTFeature);
});


// CodingResources route
Featureroute.get("/api/v1/coding",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, CodingResourcesFeature);
});

Featureroute.post("/api/v1/postCodingResources", async (req, res) => {
    await postData(req, res, CodingResourcesFeature);
});


// ComputerNetwork route
Featureroute.get("/api/v1/cn",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, ComputerNetworkFeature);
});

Featureroute.post("/api/v1/postComputerNetwork", async (req, res) => {
    await postData(req, res, ComputerNetworkFeature);
});


// DataEngineer route
Featureroute.get("/api/v1/dataengineer",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, DataEngineerFeature);
});

Featureroute.post("/api/v1/postDataEngineer", async (req, res) => {
    await postData(req, res, DataEngineerFeature);
});


// DataScience route
Featureroute.get("/api/v1/ds",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, DataScienceFeature);
});

Featureroute.post("/api/v1/postDataEngineer", async (req, res) => {
    await postData(req, res, DataScienceFeature);
});


// DBMS_SQLResources route
Featureroute.get("/api/v1/dbms",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, DBMS_SQLResourcesFeature);
});

Featureroute.post("/api/v1/postDBMS_SQLResources", async (req, res) => {
    await postData(req, res, DBMS_SQLResourcesFeature);
});


// DSAHandWrittenNotes route
Featureroute.get("/api/v1/dsahandwritten",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, DSAHandwrittenNotesFeature);
});

Featureroute.post("/api/v1/DSAHandWrittenNotes", async (req, res) => {
    await postData(req, res, DSAHandwrittenNotesFeature);
});


// DsaResources route
Featureroute.get("/api/v1/dsaguide",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, DsaResourcesFeature);
});

Featureroute.post("/api/v1/DsaResources", async (req, res) => {
    await postData(req, res, DsaResourcesFeature);
});


// HRInterviewQuestions route
Featureroute.get("/api/v1/hr", cache.route({name:'backend',expire:60*60*60}),async (req, res) => {
    await getData(req, res, HRInterviewQuestionsFeature);
});

Featureroute.post("/api/v1/postHRInterviewQuestions", async (req, res) => {
    await postData(req, res, HRInterviewQuestionsFeature);
});


// Java route
Featureroute.get("/api/v1/java",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, JavaFeature);
});

Featureroute.post("/api/v1/postJava", async (req, res) => {
    await postData(req, res, JavaFeature);
});


// JavaScript route
Featureroute.get("/api/v1/js",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, JavaScriptFeature);
});

Featureroute.post("/api/v1/postJavaScript", async (req, res) => {
    await postData(req, res, JavaScriptFeature);
});


// Nodejs route
Featureroute.get("/api/v1/nodejs",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, NodejsFeature);
});

Featureroute.post("/api/v1/postNodejs", async (req, res) => {
    await postData(req, res, NodejsFeature);
});


// OOps route
Featureroute.get("/api/v1/oops",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, OOpsFeature);
});

Featureroute.post("/api/v1/postOOps", async (req, res) => {
    await postData(req, res, OOpsFeature);
});

// Python route
Featureroute.get("/api/v1/python",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, PythonFeature);
});

Featureroute.post("/api/v1/postPython", async (req, res) => {
    await postData(req, res, PythonFeature);
});


// React route
Featureroute.get("/api/v1/react",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, ReactFeature);
});

Featureroute.post("/api/v1/postReact", async (req, res) => {
    await postData(req, res, ReactFeature);
});


// RemoteHiring route
Featureroute.get("/api/v1/remoteresource",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, RemoteHiringFeature);
});

Featureroute.post("/api/v1/postRemoteHiring", async (req, res) => {
    await postData(req, res, RemoteHiringFeature);
});


// ResumeGuide route
Featureroute.get("/api/v1/resume",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, ResumeGuideFeature);
});

Featureroute.post("/api/v1/postResumeGuide", async (req, res) => {
    await postData(req, res, ResumeGuideFeature);
});


// RoadMaps route
Featureroute.get("/api/v1/RoadMaps",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, RoadMapsFeature);
});

Featureroute.post("/api/v1/postRoadMaps", async (req, res) => {
    await postData(req, res, RoadMapsFeature);
});


// StartupList route
Featureroute.get("/api/v1/startup", cache.route({name:'backend',expire:60*60*60}),async (req, res) => {
    await getData(req, res, StartupListFeature);
});

Featureroute.post("/api/v1/postStartupList", async (req, res) => {
    await postData(req, res, StartupListFeature);
});


// SystemDesign route
Featureroute.get("/api/v1/systemdesign",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, SystemDesignFeature);
});

Featureroute.post("/api/v1/postSystemDesign", async (req, res) => {
    await postData(req, res, SystemDesignFeature);
});


// CompaniesCodingQuestions route
Featureroute.get("/api/v1/companiesqs",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, CompaniesCodingQuestionsFeature);
});

Featureroute.post("/api/v1/postCompaniesCodingQuestions", async (req, res) => {
    await postData(req, res, CompaniesCodingQuestionsFeature);
});


// OperatingSystem route
Featureroute.get("/api/v1/os",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, OperatingSystemFeature);
});

Featureroute.post("/api/v1/postOperatingSystem", async (req, res) => {
    await postData(req, res, OperatingSystemFeature);
});


// CloudComputing route
Featureroute.get("/api/v1/cloud",cache.route({name:'backend',expire:60*60*60}), async (req, res) => {
    await getData(req, res, CloudComputingFeature);
});

Featureroute.post("/api/v1/postCloudComputing", async (req, res) => {
    await postData(req, res, CloudComputingFeature);
});

export default Featureroute