import BaseModel from "./BaseModel.js"

export default class FuncionarioModel extends BaseModel{
    constructor(db){
        super(db,'funcionario')//vai preencher o construtor do baseModel com esses dados
    }
}