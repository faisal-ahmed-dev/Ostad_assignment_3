const express=require('express');
const UserController=require('../controller/UserController');
const TaskController=require('../controller/TaskController');
const AuthMiddleware=require('../middleware/AuthMiddleware');


const router=express.Router();


router.post("/registration",UserController.registration);
router.post("/login",UserController.login);



router.get("/profileDetails",AuthMiddleware,UserController.profileDetails);
router.post("/profileUpdate",AuthMiddleware,UserController.profileUpdate);



router.post("/task/create",AuthMiddleware,TaskController.create);
router.post("/task/update/:id",AuthMiddleware,TaskController.update);
router.get("/task/read",AuthMiddleware,TaskController.read);
router.get("/task/delete/:id",AuthMiddleware,TaskController.delete);
router.post('/task/status' ,AuthMiddleware , TaskController.complete )



module.exports=router;