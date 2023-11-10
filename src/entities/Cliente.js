export default class Cliente{
    constructor(id, cnpj, nome, telefone, endereco, cidade, estado, cep, email){
        this.id = id,
        this.cnpj = cnpj,
        this.nome = nome,
        this.telefone = telefone,
        this.endereco = endereco,
        this.cidade = cidade, 
        this.estado = estado,
        this.cep = cep,
        this.email = email
    }
}