import BaseModel from "./BaseModel.js"

export default class ClienteModel extends BaseModel{
    constructor(db){
        super(db,'cliente')//vai preencher o construtor do baseModel com esses dados
    }
}