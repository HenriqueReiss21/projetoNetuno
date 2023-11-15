import {getPostVendas,getDeletePutVendaById} from './vendas.js'
import {getPostProdutoServico,getDeletePutProdutoServicoById} from './produtoServico.js'
import {getDeletePutFuncionarioById,getPostFuncionarios} from './funcionarios.js'

export default{
    '/vendas': getPostVendas,
    '/vendas/{id}': getDeletePutVendaById,
    '/produtoServicos': getPostProdutoServico,
    '/produtoServicos/{id}': getDeletePutProdutoServicoById,
    '/funcionarios': getPostFuncionarios,
    '/funcionarios/{id}': getDeletePutFuncionarioById

}