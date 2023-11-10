import BaseModel from "./BaseModel.js"

export default class VendaDetalhadaModel extends BaseModel{
    constructor(db){
        super(db,'vendaDetalhada')//vai preencher o construtor do baseModel com esses dados
    }
}