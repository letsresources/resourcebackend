import { Email } from "../model/Subscribution/Subscribe.Model.js";
import { Subscribemail } from "../utils/subscribe.js";


export async function postEmail(req,res){
    try {
        const {email} =  await req.body;

        if(!email){
            return res.status(404).json({"message":"email is required"})
        }
        const finduser =  await Email.findOne({"email":email})
        if(finduser){
            return res.status(404).json({"message":"email all exist"})
        }

        const newUser =  await Email({
            email
        })

        if(!newUser){
            return res.status(500).json({"message":"server error"})
        }


        const saveUser = await newUser.save()
        if(saveUser){
            await Subscribemail(email)
        }


        return res.status(200).json({"message":"Thanks for subscrbing"})


    } catch (error) {
        return res.json({"message":error})
        
    }
}