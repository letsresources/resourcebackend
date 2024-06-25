import { EmailModel } from "../model/emailForm/Email.Model.js"

export async function EmailController(req,res){
    try {
        const {email,name,topic,subject,message} = await req.body;
    
        if(!email && !name && !topic && !subject && !message){
            return res.status(404).json({"message":"All field are required"})
        }
    
        const userEmail  =  await new EmailModel({
            email,
            name,
            topic,
            subject,
            message
        });
    
        if(!userEmail){
            return res.status(404).json({"message":"server error"})
        }
    
        await userEmail.save()
    
        return res.status(200).json({"message":"success"})
    } catch (error) {

        return res.status(404).json({"message":error})
        
    }


}