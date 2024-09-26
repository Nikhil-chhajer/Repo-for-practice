const {Airplane}=require('../models/index');
const CrudRepository=require('./crudrepo');
class AirplaneRepository extends CrudRepository{
    constructor(){
        console.log("hell")
        super(Airplane);
    }
}
module.exports=AirplaneRepository;