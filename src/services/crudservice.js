
class CrudService{
    constructor(repository){
        this.repository=repository;
    }
    async create(data){
        try {
            console.log("hello",this.repository)
            console.log(data);
            const response = await this.repository.create(data);
            return response;
        }
        catch (error) {
            console.log("something wrong in the CRUD Service layer");
            throw error ;
        }
    }
}
module.exports=CrudService;