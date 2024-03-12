const UsersModel = require("../model/UsersModel");
const jwt=require('jsonwebtoken');


exports.registration=async (req,res)=>{
    try{
        let reqBody=req.body;
        await UsersModel.create(reqBody);
        res.json({status:"success",message:"Registration Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}


exports.login=async (req,res)=>{
    try{
        let reqBody=req.body;
        let user= await UsersModel.find(reqBody)
        if(user.length>0){
            let Payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:reqBody['email']}
            let token=jwt.sign(Payload,'faisal-xyz-123');
            res.json({status:"success",message:"User Found",token:token})
        }else {
            res.json({status:"fail",message:"No User Found"})
        }
        res.json({status:"success",message:user})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}


exports.profileDetails=async (req,res)=>{
    try{

        let email=req.headers['email'];
        let result=await UsersModel.find({email:email})
        res.json({status:"success",data:result})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}


exports.profileUpdate=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let reqBody=req.body;
        await UsersModel.updateOne({email:email},reqBody);
        res.json({status:"success",message:"Update Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }

}






