export default class VendaDetalhada{
    constructor(codVenda, codItem, quantidade, valorUnitario, totalBruto,valorDesconto,valorTotal){
        this.codVenda = codVenda,
        this.codItem = codItem,
        this.quantidade = quantidade,
        this.valorUnitario = valorUnitario,
        this.totalBruto = totalBruto,
        this.valorDesconto = valorDesconto,
        this.valorTotal = valorTotal
    }
}