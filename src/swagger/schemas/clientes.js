export const Cliente = {
    type: "object",
    required: ["id", "cnpj", "nome", "telefone", "endereco", "cidade", "estado", "cep", "email"],
    properties: {//descrever campos e sua tipagem
      id: {
        type: "number",
        description: "ID do cliente",
      },
      cnpj: {
        type: "string",
        description: "cnpj do cliente ",
      },
      nome: {
        type: "string",
        description: "Nome do cliente",
      },
      telefone: {
        type: "string",
        description: "Telefone do cliente",
      },
      endereco: {
        type: "string",
        description: "Endereço do cliente",
      },
      cidade: {
        type: "string",
        description: "Cidade do cliente",
      },
      estado: {
        type: "string",
        description: "Estado do cliente",
      },
      cep: {
        type: "string",
        description: "Cep do cliente",
      },
      email: {
        type: "string",
        description: "E-mail do cliente",
      },
    },
    example: {
      id: 1,
      cnpj: "53.342.323/0001-23",
      nome: "Cleiton Romário",
      telefone: "(99)99999-9999",
      endereco: "Rua recanto",
      cidade: "Indaiatuba",
      estado: "São-Paulo",
      cep: "13445-343",
      email: "sesdasda@dsds.com"
    },
  }