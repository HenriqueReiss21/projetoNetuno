import {Router} from 'express'  //essas chaves indicam a coisa específica do express que eu quero pegar
import Cliente from '../entities/Cliente.js'
import ClienteModel from '../models/ClienteModel.js'

export default class ClienteRoutes{ //
    constructor(db){
        this.db = new ClienteModel(db)
    }

    routes(){
        const router = Router()
        router.get('/',(req,res)=>{
            const clientes = this.db.findAll()
            res.json(clientes)
        })

        router.post('/',(req,res)=>{
            const {id,cnpj,nome,telefone,endereco,cidade,estado,cep,email} = req.body

            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})
            if(!cnpj || cnpj == "") return res.status(400).json({erro: 'cnpj do cliente obrigatório'})
            if(!nome || nome =="") return res.status(400).json({erro: "nome do cliente obrigatório"})
            if(!telefone || telefone == "") return res.status(400).json({erro: 'telefone do cliente obrigatório'})
            if(!endereco || endereco  == "") return res.status(400).json({erro: 'endereco do cliente obrigatório'})
            if(!cidade || cidade == "") return res.status(400).json({erro: 'cidade do cliente obrigatório'})
            if(!estado || estado == "") return res.status(400).json({erro: 'estado do cliente obrigatório'})
            if(!cep || cep == "") return res.status(400).json({erro: 'cep obrigatório'})
            if(!email || email == "") return res.status(400).json({erro: 'email do cliente obrigatório'})

            const cliente = new Cliente(id,cnpj,nome,telefone,endereco,cidade,estado,cep,email)
            this.db.create(cliente)
            res.status(201).json(cliente)
        })
        
        router.get('/:id',(req,res)=>{ // dois pontos indica que é um parâmetro
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})

            const cliente = this.db.findById(Number(id))
            if(!cliente) return res.status(404).json({erro: "Cliente não encontrado"})

            res.json(cliente)
        })
        
        router.delete('/:id',(req,res)=>{
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})
            
            const resultado = this.db.delete(Number(id))
            if(!resultado) res.status(404).json({erro: "Erro ao remover"})

            res.json({ mensagem: 'Cliente removido com sucesso' })
        })

        router.put('/:idCliente',(req,res)=>{
            const {idCliente} = req.params
            const {id,cnpj,nome,telefone,endereco,cidade,estado,cep,email} = req.body

            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})
            if(!cnpj || cnpj == "") return res.status(400).json({erro: 'cnpj do cliente obrigatório'})
            if(!nome || nome =="") return res.status(400).json({erro: "nome do cliente obrigatório"})
            if(!telefone || telefone == "") return res.status(400).json({erro: 'telefone do cliente obrigatório'})
            if(!endereco || endereco  == "") return res.status(400).json({erro: 'endereco do cliente obrigatório'})
            if(!cidade || cidade == "") return res.status(400).json({erro: 'cidade do cliente obrigatório'})
            if(!estado || estado == "") return res.status(400).json({erro: 'estado do cliente obrigatório'})
            if(!cep || cep == "") return res.status(400).json({erro: 'cep obrigatório'})
            if(!email || email == "") return res.status(400).json({erro: 'email do cliente obrigatório'})

            const cliente = new Cliente(id,cnpj,nome,telefone,endereco,cidade,estado,cep,email)
            this.db.update(idCliente,cliente)
            res.json(cliente)                        
        })
       
        return router 
    }
}