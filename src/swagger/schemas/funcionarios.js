export const Funcionario = {
    type: "object",
    required: ["id", "nome", "cpf", "rg","endereco","cep", "cidade", "estado", "dataNascimento", "dataCadastro", "ativo", "estadoCivil", "numeroFilhos"," pensao", "funcao", "setor", "horario", "salario", "agencia", "conta"," email"],
    properties: {//descrever campos e sua tipagem
      id: {
        type: "number",
        description: "ID do funcionário",
      },
      nome: {
        type: "string",
        description: "Nome do funcionário",
      },
      cpf: {
        type: "string",
        description: "Cadastro de pessoa física do funcionario",
      },
      rg: {
        type: "string",
        description: "Registro geral do funcionário",
      },
      endereco: {
        type: "string",
        description: "Endereço do funcionário",
      },
      cep: {
        type: "string",
        description: "Cep do funcionário",
      },
      cidade: {
        type: "string",
        description: "Cidade do funcionário",
      },
      estado: {
        type: "string",
        description: "Estado do funcionário",
      },
      dataNascimento: {
        type: "string",
        description: "Data de nascimento do funcionário",
      },
      dataCadastro: {
        type: "string",
        description: "Data do cadastro do funcionário",
      },
      ativo: {
        type: "string",
        description: "Status do funcionário",
      },
      estadoCivil: {
        type: "string",
        description: "Estado civil do funcionário",
      },
      numeroFilhos: {
        type: "string",
        description: "Numero de filhos do funcionário",
      },
      pensao: {
        type: "string",
        description: "Pensão do funcionário",
      },
      funcao: {
        type: "string",
        description: "Função do funcionário",
      },
      setor: {
        type: "string",
        description: "setor do funcionário",
      },
      horario: {
        type: "string",
        description: "Horário do funcionário",
      },
      salario: {
        type: "number",
        description: "Salário do funcionário",
      },
      agencia: {
        type: "string",
        description: "Agência do funcionário",
      },
      conta: {
        type: "string",
        description: "Conta do funcionário",
      },
      email: {
        type: "string",
        description: "Email do funcionário",
      },
    },
    example: {
     id: 1,
    nome: "joao pedro caires",
    cpf: "522018998-34",
    rg:"39748953-1",
    endereco: "rua jurandir",
    cep: "133382323",
    cidade: "indaia",
    estado:"SP",
    dataNascimento:"02/09/2004",
    dataCadastro:"02/09/2023",
    ativo:"Sim",
    estadoCivil:"Solteiro",
    numeroFilhos:"0"
    ,
    pensao:"Não",
    funcao:"Diretor",
    setor:"Engenheiro",
    horario:"16:00",
    salario:1222.22,
    agencia:"1231231223-23",
    conta:"4325345435-2",
    email:"elan@gmail.com",
    },
    
 
}