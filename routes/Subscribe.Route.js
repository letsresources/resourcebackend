import express from "express";
import { postEmail } from "../controller/Subscribe.Controller.js";



const susbcribeRoute = express.Router()

susbcribeRoute.post("/api/v1/subscribe",postEmail)




export default susbcribeRoute


