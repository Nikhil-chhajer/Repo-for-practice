const express=require('express');

const UserController=require('../../controller/index');
const router=express.Router();
router.post('/create',UserController.create);
module.exports=router;