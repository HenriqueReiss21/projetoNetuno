export const VendaDetalhada = {
    type: "object",
    required: ["id", "codItem", "quantidade", "valorUnitario", "totalBruto","valorDesconto","valorTotal"],
    properties: {//descrever campos e sua tipagem
      id: {
        type: "number",
        description: "ID da venda detalhada",
      },
      codItem: {
        type: "number",
        description: "Codigo do item vendido",
      },
      quantidade: {
        type: "number",
        description: "Quantidade de itens vendido",
      },
      valorUnitario: {
        type: "number",
        description: "Valor de cada item vendido",
      },
      totalBruto: {
        type: "number",
        description: "Valor total bruto dos itens vendidos",
      },
      valorDesconto: {
        type: "number",
        description: "Valor do desconto dado sobre o item",
      },
      valorTotal: {
        type: "number",
        description: "Valor total da venda",
      },
    },
    example: {
      id: 1,
      codItem: 32,
      quantidade: 10,
      valorUnitario: 6.60,
      totalBruto: 66,
      valorDesconto: 5,
      valorTotal: 61  
    },
  }
