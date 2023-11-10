import BaseModel from "./BaseModel.js"

export default class ProdutoServicoModel extends BaseModel{
    constructor(db){
        super(db,'produtoServico')//vai preencher o construtor do baseModel com esses dados
    }
}