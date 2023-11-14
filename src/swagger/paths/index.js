import {getPostVendas,getDeletePutVendaById} from './vendas.js'
import {getPostProdutoServico,getDeletePutProdutoServicoById} from './produtoServico.js'

export default{
    '/vendas': getPostVendas,
    '/vendas/{id}': getDeletePutVendaById,
    '/produtoServicos': getPostProdutoServico,
    '/produtoServicos/{id}': getDeletePutProdutoServicoById
}