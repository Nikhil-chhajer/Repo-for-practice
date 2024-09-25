const UserRepository = require("../repository");

class UserService{
    constructor(){
        this.userRepository=new UserRepository;
    }
    async create({Name,Email,Password}){
        try {

            const user=await this.userRepository.createuser({Name,Email,Password});
            return user;
        } catch (error) {
            console.log("something went wrong in service layer");
        }

    }

    
}
module.exports=UserService;