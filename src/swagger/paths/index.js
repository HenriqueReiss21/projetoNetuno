import {getPostVendas,getDeletePutVendaById} from './vendas.js'

export default{
    '/vendas': getPostVendas,
    '/vendas/{id}': getDeletePutVendaById
}