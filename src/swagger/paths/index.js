import {getPostVendas,getDeletePutVendaById} from './vendas.js'
import {getPostProdutoServico,getDeletePutProdutoServicoById} from './produtoServico.js'
import {getDeletePutFuncionarioById,getPostFuncionarios} from './funcionarios.js'
import {getDeletePutClienteById, getPostClientes} from './clientes.js'

export default{
    '/vendas': getPostVendas,
    '/vendas/{id}': getDeletePutVendaById,
    '/produtoServicos': getPostProdutoServico,
    '/produtoServicos/{id}': getDeletePutProdutoServicoById,
    '/funcionarios': getPostFuncionarios,
    '/funcionarios/{id}': getDeletePutFuncionarioById,
    '/clientes': getPostClientes,
    '/clientes/{id}': getDeletePutClienteById
}