export const getPostFuncionarios = { //swagger nesse contexto é uma prática
    get: { // o que o get vai dar de resposta
      description: "Retorna a lista de funcionários",
      tags: ["Funcionários"],
      responses: {
        200: {//descrever cada resposta 
          description: "Lista de funcionários",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/schemas/Funcionario",//vai importar o Venda como esquema
                },
              },
            },
          },
        },
        500: {
          description: "Erro interno",
        },
      },
    },
    post: {
      description: "Cria um novo funcionário",
      tags: ["Funcionários"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Funcionario",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Funcionario criado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/Funcionario",
              },
            },
          },
        },
        500: {
          description: "Erro interno",
        },
      },
    }
  }
  
export const getDeletePutFuncionarioById = {
    get: {
      description: "Retorna um funcionário pelo Id",
      tags: ["Funcionários"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do Funcionario",
          required: true,
          schema: {
            type: "integer"
          }
        }
      ],
      responses: {
        200: {
          description: "Funcionário",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/Funcionario",
              },
            },
          },
        },
        500: {
          description: "Erro interno",
        },
      },
    },
    delete: {
      description: "Deleta um funcionário pelo Id",
      tags: ["Funcionários"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do funcionário",
          required: true,
          schema: {
            type: "integer"
          }
        }
      ],
      responses: {
        200: {
          description: "Mensagem de sucesso",
          content: {
            "application/json": {
              message: "Funcionário removido com sucesso"
            },
          },
        },
        500: {
          description: "Erro interno",
        },
      },
    },
    put: {   
    description: "Altera os dados de um funcionário",
    tags: ["Funcionários"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Id do Funcionário",
        required: true,
        schema: {
          type: "integer"
        }
      }
    ],    
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/Funcionario",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Funcionario alterada",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Funcionario",
            },
          },
        },
      },
      500: {
        description: "Erro interno",
      },
    },
  }
}