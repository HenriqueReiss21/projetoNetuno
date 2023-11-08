export default class BaseModel{
    constructor(db,entity) { 

        this.db = db[entity]
    }

    findAll(){
        return this.db
    }

    create(item){
        this.db.push(item)
    }

    findById(id){
        return this.db.find((item) => item.id == id)
    }

    delete(id){
        const index = this.db.findIndex((item) => item.id == id)
        if(index === -1) throw Error('O registro informado não existe')
        this.db.splice(index,1)
        return true
    }

    update(id, item){
        const index = this.db.findIndex((item) => item.id == id)
        if(index === -1) throw Error('O registro informado não existe')
        this.db[index] = item
    }
}