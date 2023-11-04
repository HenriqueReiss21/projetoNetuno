export default class VendaDetalhada{
    constructor(codVenda, codItem, codQuantidade, valorUnitario, totalBruto,valorDesconto,valorTotal){
        this.codVenda = codVenda,
        this.codItem = codItem,
        this.codQuantidade = codQuantidade,
        this.valorUnitario = valorUnitario,
        this.totalBruto = totalBruto,
        this.valorDesconto = valorDesconto,
        this.valorTotal = valorTotal
    }
}