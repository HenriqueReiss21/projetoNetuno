export default class VendaDetalhada{
    constructor(id, codItem, quantidade, valorUnitario, totalBruto,valorDesconto,valorTotal){
        this.id = id,
        this.codItem = codItem,
        this.quantidade = quantidade,
        this.valorUnitario = valorUnitario,
        this.totalBruto = totalBruto,
        this.valorDesconto = valorDesconto,
        this.valorTotal = valorTotal
    }
}