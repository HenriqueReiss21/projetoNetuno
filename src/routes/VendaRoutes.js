import {Router} from 'express'  //essas chaves indicam a coisa específica do express que eu quero pegar
import Venda from '../entities/Venda.js'
import VendaModel from '../models/VendaModel.js'

export default class VendaRoutes{ //
    constructor(db){
        this.db = new VendaModel(db)
    }

    routes(){
        const router = Router()
        router.get('/',(req,res)=>{
            const vendas = this.db.findAll()
            res.json(vendas)
        })

        router.post('/',(req,res)=>{
            const {id,codCliente,codFuncionario,dataVenda,horaVenda} = req.body

            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})
            if(!codCliente || codCliente == "") return res.status(400).json({erro: 'código do cliente obrigatório'})
            if(!codFuncionario || codFuncionario =="") return res.status(400).json({erro: "código do funcionario obrigatório"})
            if(!dataVenda || dataVenda == "") return res.status(400).json({erro: 'data da venda obrigatório'})
            if(!horaVenda || horaVenda == "") return res.status(400).json({erro: 'hora da venda obrigatório'})

            const venda = new Venda(id,codCliente,codFuncionario,dataVenda,horaVenda)
            this.db.create(venda)
            res.status(201).json(venda)
        })
        
        router.get('/:id',(req,res)=>{ // dois pontos indica que é um parâmetro
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})

            const venda = this.db.findById(Number(id))
            if(!venda) return res.status(404).json({erro: "Venda não encontrada"})

            res.json(venda)
        })
        
        router.delete('/:id',(req,res)=>{
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})
            
            const resultado = this.db.delete(Number(id))
            if(!resultado) res.status(404).json({erro: "Erro ao remover"})

            res.json({ mensagem: 'Venda removida com sucesso' })
        })

        router.put('/:idVenda',(req,res)=>{
            const {idVenda} = req.params
            const {id,codCliente,codFuncionario,dataVenda,horaVenda} = req.body

            if(!id || id == "") return res.status(400).json({erro:'id obrigatorio'})
            if(!codCliente || codCliente == "") return res.status(400).json({erro: 'código do cliente obrigatório'})
            if(!codFuncionario || codFuncionario =="") return res.status(400).json({erro: "código do funcionario obrigatório"})
            if(!dataVenda || dataVenda == "") return res.status(400).json({erro: 'data da venda obrigatório'})
            if(!horaVenda || horaVenda == "") return res.status(400).json({erro: 'hora da venda obrigatório'})

            const venda = new Venda(id,codCliente,codFuncionario,dataVenda,horaVenda)
            this.db.update(idVenda,venda)
            res.json(venda)                        
        })
       
        return router 
    }
}