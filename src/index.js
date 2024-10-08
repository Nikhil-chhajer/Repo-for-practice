const express=require('express');
const {PORT}=require('./config/serverconfig');
const bodyParser=require('body-parser');
const AirplaneService=require('././services/airplaneservice');
const airplane=new AirplaneService();
// const userRepository=require('./repository/index');
// const user=new userRepository();
const apiRoutes=require('./routes/index');
const setupAndStartServer=async ()=>{
    const app=express();
    const Airplane=await airplane.create({
        name:"jet spice",
        modelId:"1244"
    })
    console.log(Airplane)
    // const created= await user.createuser({Name:"manish",Email:"nikhilchhjaer@gmai.com",Password:"12344"});
    // console.log(created);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
           extended: true
    }));
    app.use('/api',apiRoutes);
    app.listen(PORT,()=>{
        console.log("server start at",PORT);
        })

}
setupAndStartServer();