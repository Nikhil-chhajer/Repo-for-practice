const {User}=require('../models/index.js');
class UserRepository{
    async createuser({Name,Email,Password}){
        try {
            const user=await User.create({Name,Email,Password});
            return user;
        } catch (error) {
            console.log("something went wrong");
        }

    }
}
module.exports=UserRepository;