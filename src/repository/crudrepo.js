class CrudRepository {
    constructor(model) {
        this.model = model
    }
    async create(data) {
        try {
            console.log("hello");
            const creation = await this.model.create(data);
            return creation;
        } catch (error) {
            console.log("something wrong in the CRUD repo layer");
            throw { error };
        }
    }
}
module.exports = CrudRepository;