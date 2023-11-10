import {Router} from 'express'  //essas chaves indicam a coisa específica do express que eu quero pegar
import Funcionario from '../entities/Funcionario.js'
import FuncionarioModel  from '../models/FuncionarioModel.js'

export default class FuncionariosRoutes{ //
    constructor(db){
        this.db = new FuncionarioModel(db)
    }

    routes(){
        const router = Router()
        router.get('/',(req,res)=>{
            const funcionarios = this.db.findAll()
            res.json(funcionarios)
        })

        router.post('/',(req,res)=>{
            const {id, nome, cpf, rg, endereco, cep, cidade, estado, dataNascimento, dataCadastro, ativo, estadoCivil, numeroFilhos, pensao, funcao, setor, horario, salario, agencia, conta, email} = req.body

            if(!id || id == "") return res.status(400).json({erro:'codigo do id obrigatório'})
            if(!nome || nome == "") return res.status(400).json({erro: 'nome obrigatório'})
            if(!cpf || cpf =="") return res.status(400).json({erro: "cpf obrigatório"})
            if(!rg || rg == "") return res.status(400).json({erro: 'rg obrigatório'})
            if(!endereco || endereco == "") return res.status(400).json({erro: 'endereço obrigatório'})
            if(!cep|| cep == "") return res.status(400).json({erro: 'cep obrigatório'})
            if(!cidade || cidade == "") return res.status(400).json({erro: 'cidade obrigatório'})
            if(!estado|| estado == "") return res.status(400).json({erro: 'estado obrigatório'})
            if(!dataNascimento|| dataNascimento == "") return res.status(400).json({erro: 'data de nascimento obrigatório'})
            if(!dataCadastro||dataCadastro  == "") return res.status(400).json({erro: 'data do cadastro obrigatório'})
            if(!ativo|| ativo == "") return res.status(400).json({erro: 'ativo ou desligado é obrigatório'})
            if(!estadoCivil|| estadoCivil == "") return res.status(400).json({erro: 'estado civil obrigatório'})
            if(!numeroFilhos|| numeroFilhos == "") return res.status(400).json({erro: 'numero de filhos obrigatório'})
            if(!pensao|| pensao == "") return res.status(400).json({erro: 'pensao obrigatório'})
            if(!funcao|| funcao == "") return res.status(400).json({erro: 'cep obrigatório'})
            if(!setor|| setor == "") return res.status(400).json({erro: 'setor obrigatório'})
            if(!horario|| horario == "") return res.status(400).json({erro: 'cep obrigatório'})
            if(!salario||salario == "") return res.status(400).json({erro: 'salario obrigatório'})
            if(!agencia|| agencia == "") return res.status(400).json({erro: 'agencia obrigatório'})
            if(!conta|| conta == "") return res.status(400).json({erro: 'conta obrigatório'})
            if(!email|| email == "") return res.status(400).json({erro: 'email obrigatório'})

            const funcionarios = new Funcionario(id,nome, cpf, rg, endereco, cep, cidade, estado, dataNascimento, dataCadastro, ativo, estadoCivil, numeroFilhos, pensao, funcao, setor, horario, salario, agencia, conta, email)
            this.db.create(funcionarios)
            res.status(201).json(funcionarios)
        })
        
        router.get('/:id',(req,res)=>{ // dois pontos indica que é um parâmetro
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({erro:'id obrigatório'})

            const funcionarios = this.db.findById(Number(id))
            if(!funcionarios) return res.status(404).json({erro: "funcionario não encontrada"})

            res.json(funcionarios)
        })
        
        
        router.delete('/:id',(req,res)=>{
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({erro:'código do id obrigatório'})
            
            const resultado = this.db.delete(Number(id))
            if(!resultado) res.status(404).json({erro: "Erro ao remover"})

            res.json({ mensagem: 'Funcionário removido com sucesso' })
        })

        router.put('/:idFuncionario',(req,res)=>{
            const {idFuncionario} = req.params
            const {id, nome, cpf, rg, endereco, cep, cidade, estado, dataNascimento, dataCadastro, ativo, estadoCivil, numeroFilhos, pensao, funcao, setor, horario, salario, agencia, conta, email} = req.body

            if(!id || id == "") return res.status(400).json({erro:'id do funcionário obrigatório'})
            if(!nome || nome == "") return res.status(400).json({erro: 'nome obrigatório'})
            if(!cpf || cpf =="") return res.status(400).json({erro: "cpf obrigatório"})
            if(!rg || rg == "") return res.status(400).json({erro: 'rg obrigatório'})
            if(!endereco || endereco == "") return res.status(400).json({erro: 'endereço obrigatório'})
            if(!cep|| cep == "") return res.status(400).json({erro: 'cep obrigatório'})
            if(!cidade || cidade == "") return res.status(400).json({erro: 'cidade obrigatório'})
            if(!estado|| estado == "") return res.status(400).json({erro: 'estado obrigatório'})
            if(!dataNascimento|| dataNascimento == "") return res.status(400).json({erro: 'data de nascimento obrigatório'})
            if(!dataCadastro||dataCadastro  == "") return res.status(400).json({erro: 'data do cadastro obrigatório'})
            if(!ativo|| ativo == "") return res.status(400).json({erro: 'ativo ou desligado é obrigatório'})
            if(!estadoCivil|| estadoCivil == "") return res.status(400).json({erro: 'estado civil obrigatório'})
            if(!numeroFilhos|| numeroFilhos == "") return res.status(400).json({erro: 'numero de filhos obrigatório'})
            if(!pensao|| pensao == "") return res.status(400).json({erro: 'pensao obrigatório'})
            if(!funcao|| funcao == "") return res.status(400).json({erro: 'cep obrigatório'})
            if(!setor|| setor == "") return res.status(400).json({erro: 'setor obrigatório'})
            if(!horario|| horario == "") return res.status(400).json({erro: 'cep obrigatório'})
            if(!salario||salario == "") return res.status(400).json({erro: 'salario obrigatório'})
            if(!agencia|| agencia == "") return res.status(400).json({erro: 'agencia obrigatório'})
            if(!conta|| conta == "") return res.status(400).json({erro: 'conta obrigatório'})
            if(!email|| email == "") return res.status(400).json({erro: 'email obrigatório'})

            const funcionario = new Funcionario(id, nome, cpf, rg, endereco, cep, cidade, estado, dataNascimento, dataCadastro, ativo, estadoCivil, numeroFilhos, pensao, funcao, setor, horario, salario, agencia, conta, email)
            this.db.update(idFuncionario,funcionario)
            res.json(funcionario)                        
        })
       
        return router 
    }
}