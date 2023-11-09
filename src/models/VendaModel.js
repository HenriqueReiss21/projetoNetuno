import BaseModel from "./BaseModel.js"

export default class VendaModel extends BaseModel{
    constructor(db){
        super(db,'venda')//vai preencher o construtor do baseModel com esses dados
    }
}