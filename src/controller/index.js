const UserService=require('../services/practiceservice');
const userservice=new UserService();
const create=async(req,res)=>{
 try {
    const user=await userservice.create({Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password
    });
    return res.status(201).json({
        data:user,
        success:true,
        message:"user created successfully",
        err:{}
    })
 } catch (error) {
    return res.status(500).json({
        success:false,
        message:"user not created",
        err:{}
    })
 }
}
module.exports={
    create
}