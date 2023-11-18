import {Router} from 'express'  //essas chaves indicam a coisa específica do express que eu quero pegar
import VendaDetalhada from '../entities/VendaDetalhada.js'
import VendaDetalhadaModel from '../models/VendaDetalhadaModel.js'

export default class VendaDetalhadaRoutes{ //
    constructor(db){
        this.db = new VendaDetalhadaModel(db)
    }

    routes(){
        const router = Router()
        router.get('/',(req,res)=>{
            const vendasdetalhadas = this.db.findAll()
            res.json(vendasdetalhadas)
        })

        router.post('/',(req,res)=>{
            const {id, codItem, quantidade, valorUnitario, totalBruto,valorDesconto,valorTotal} = req.body

            if(!id || id == "") return res.status(400).json({erro:'codigo da venda obrigatório'})
            if(!codItem || codItem == "") return res.status(400).json({erro: 'código do item obrigatório'})
            if(!quantidade || quantidade =="") return res.status(400).json({erro: "quantidade obrigatório"})
            if(!valorUnitario || valorUnitario == "") return res.status(400).json({erro: 'valor unitário obrigatório'})
            if(!totalBruto || totalBruto == "") return res.status(400).json({erro: 'total bruto obrigatório'})
            if(!valorDesconto|| valorDesconto == "") return res.status(400).json({erro: 'valor do desconto obrigatório'})
            if(!valorTotal || valorTotal == "") return res.status(400).json({erro: 'valor total obrigatório'})

            const vendadetalhada = new VendaDetalhada(id, codItem, quantidade, valorUnitario, totalBruto,valorDesconto,valorTotal)
            this.db.create(vendadetalhada)
            res.status(201).json(vendadetalhada)
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
            if(!id || id == "") return res.status(400).json({erro:'código do id obrigatório'})
            
            const resultado = this.db.delete(Number(id))
            if(!resultado) res.status(404).json({erro: "Erro ao remover"})

            res.json({ mensagem: 'Venda detalhada removida com sucesso' })
        })

        router.put('/:idVendaDetalhada',(req,res)=>{
            const {idVendaDetalhada} = req.params
            const {id, codItem, quantidade, valorUnitario, totalBruto,valorDesconto,valorTotal} = req.body

            if(!id || id == "") return res.status(400).json({erro:'código da venda obrigatorio'})
            if(!codItem || codItem == "") return res.status(400).json({erro: 'código do item obrigatório'})
            if(!quantidade || quantidade =="") return res.status(400).json({erro: "quantidade obrigatório"})
            if(!valorUnitario || valorUnitario == "") return res.status(400).json({erro: 'valor unitário obrigatório'})
            if(!totalBruto ||totalBruto == "") return res.status(400).json({erro: 'total bruto obrigatório'})
            if(!valorDesconto || valorDesconto == "") return res.status(400).json({erro: 'valor do desconto obrigatório'})
            if(!valorTotal || valorTotal == "") return res.status(400).json({erro: 'valor total obrigatório'})

            const vendadetalhada = new VendaDetalhada(id, codItem, quantidade, valorUnitario, totalBruto,valorDesconto,valorTotal)
            this.db.update(idVendaDetalhada,vendadetalhada)
            res.json(vendadetalhada)                        
        })
       
        return router 
    }
}