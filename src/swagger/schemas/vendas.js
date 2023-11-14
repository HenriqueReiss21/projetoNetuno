export const Venda = {
    type: "object",
    required: ["id", "codCliente", "codFuncionario", "dataVenda", "horaVenda"],
    properties: {//descrever campos e sua tipagem
      id: {
        type: "number",
        description: "ID da venda",
      },
      codCliente: {
        type: "number",
        description: "Código do cliente que realizou a compra",
      },
      codFuncionario: {
        type: "number",
        description: "Código do funcionário responsável pela venda",
      },
      dataVenda: {
        type: "string",
        description: "Dia em que a venda foi realizada",
      },
      horaVenda: {
        type: "string",
        description: "Hora em que a venda foi realizada",
      },
    },
    example: {
      id: 1,
      codCliente: 5,
      codFuncionario: 3,
      dataVenda: "10-10-2023",
      horaVenda: "13:35",
    },
  }