const express=require('express');
const router=require('./src/route/api');
const app=new express();
const mongoose=require('mongoose');




let URL="mongodb://localhost:27017/taskmern5"
let OPTION={user:"",pass:"",autoIndex:true}
mongoose.connect(URL,OPTION).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})


app.use("/api",router);

app.use("*",(req,res)=>{
    res.status(404).json({data:"Not found"})
})

module.exports=app;



















