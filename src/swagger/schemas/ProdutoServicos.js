export const ProdutoServico = {
    type: "object",
    required: ["id", "servico", "nome"],
    properties: {//descrever campos e sua tipagem
      id: {
        type: "number",
        description: "ID do Produto ou serviço",
      },
      servico: {
        type: "number",
        description: "Indica se o campo cadastrado é um Produto ou serviço. 0 para Produto e 1 para Serviço",
      },
      nome: {
        type: "string",
        description: "Nome do produto ou serviço",
      },
    },
    example: {
      id: 1,
      servico: 0,
      nome: "Monitoramento tipo 1",
    },
  }