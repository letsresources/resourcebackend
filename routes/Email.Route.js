import express from "express";
import {EmailController} from "..//controller/Email.Controller.js"

const EmailRouter = express.Router()


EmailRouter.post("/api/v1/emailquery",EmailController)




export default EmailRouter