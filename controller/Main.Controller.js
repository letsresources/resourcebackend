export async function getData(_req, res, modelName) {
    try {
        if (!modelName) {
            return res.status(500).json({"message": "modelName is required"});
        }

        const model = modelName; // Assuming modelName is a Mongoose model or similar
        const response = await model.find(); // Await the asynchronous operation

        if (!response) {
            return res.status(500).json({"message": "server is error or model is not loaded"});
        }

        return res.status(200).json({"data": response});
        
    } catch (error) {
        return res.status(500).json({"error": "An error occurred", "details": error.message});
    }
}



export async function postData(req,res,modelName){
    try {
        const model = await modelName
       if(!model){
        return res.json({"message":"model is not loaded"}).status(500)
       }
       const {name,imageUrl,link} = await req.body;
       if(![name && imageUrl]){
        return res.json({"message":"feild are required"});
       } 
       const createModel = await new model({
        name,
        imageUrl,
        link
       })
       if(!createModel){
        return res.json({"message":"server error model is not created"}).status(500)
       } 
       await createModel.save()
       return res.json({"message":"data created"}).status(200)
    } catch (error) {
        return res.json({"message":"error"}).status(500)
    }
}