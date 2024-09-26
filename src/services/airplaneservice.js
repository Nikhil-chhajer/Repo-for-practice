const CrudService=require('../services/crudservice');

const AirplaneRepository = require('../repository/airplane');
const airplaneRepository=new AirplaneRepository();
class AirplaneService extends CrudService{
    constructor(){      
        super(airplaneRepository);
    }
}
module.exports=AirplaneService;