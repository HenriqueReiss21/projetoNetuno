import {Router} from 'express'  //essas chaves indicam a coisa específica do express que eu quero pegar
import ProdutoServico from '../entities/ProdutoServico.js'
import ProdutoServicoModel from '../models/ProdutoServicoModel.js'

export default class ProdutoServicoRoutes{ //
    constructor(db){
        this.db = new ProdutoServicoModel(db)
    }

    routes(){
        const router = Router()
        router.get('/',(req,res)=>{
            const produtoServico = this.db.findAll()
            res.json(produtoServico)
        })

        router.post('/',(req,res)=>{
            const {id, servico,nome} = req.body

            if(!id || id == "") return res.status(400).json({erro:'codigo do id obrigatório'})
            if(!servico || servico == "") return res.status(400).json({erro: 'servico obrigatório'})
            if(!nome || nome == "") return res.status(400).json({erro: 'nome obrigatório'})
            
            const produtoServico = new ProdutoServico(id, servico,nome)
            this.db.create(produtoServico)
            res.status(201).json(produtoServico)
        })
        
        router.get('/:id',(req,res)=>{ // dois pontos indica que é um parâmetro
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})

            const produtoServico = this.db.findById(Number(id))
            if(!produtoServico) return res.status(404).json({erro: "Produto ou serviço não encontrado"})

            res.json(produtoServico)
        })
        
        
        router.delete('/:id',(req,res)=>{
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({erro:'código do id obrigatório'})
            
            const resultado = this.db.delete(Number(id))
            if(!resultado) res.status(404).json({erro: "Erro ao remover"})

            res.json({ mensagem: 'Produto ou servico removido com sucesso' })
        })

        router.put('/:idProdutoServico',(req,res)=>{
            const {idProdutoServico} = req.params
            const {id, servico,nome} = req.body

            if(!id || id == "") return res.status(400).json({erro:'codigo do id obrigatório'})
            if(!servico || servico == "") return res.status(400).json({erro: 'servico obrigatório'})
            if(!nome || nome == "") return res.status(400).json({erro: 'nome obrigatório'})

            const produtoServico = new ProdutoServico(id, servico,nome)
            this.db.update(idProdutoServico,produtoServico)
            res.json(produtoServico)                        
        })
       
        return router 
    }
}