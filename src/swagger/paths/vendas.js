export const getPostVendas = { //swagger nesse contexto é uma prática
    get: { // o que o get vai dar de resposta
      description: "Retorna a lista de tarefas",
      tags: ["Vendas"],
      responses: {
        200: {//descrever cada resposta 
          description: "Lista de vendas",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/schemas/Venda",//vai importar o Venda como esquema
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
      description: "Cria uma nova venda",
      tags: ["Vendas"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Venda",
            },
          },
        },
      },
      responses: {
        200: {
          description: "A venda criada",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/Venda",
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
  
export const getDeletePutVendaById = {
    get: {
      description: "Retorna uma venda pelo Id",
      tags: ["Vendas"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id da Venda",
          required: true,
          schema: {
            type: "integer"
          }
        }
      ],
      responses: {
        200: {
          description: "Venda",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/Venda",
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
      description: "Deleta uma venda pelo Id",
      tags: ["Vendas"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id da Venda",
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
              message: "Venda removida com sucesso"
            },
          },
        },
        500: {
          description: "Erro interno",
        },
      },
    },
    put: {   
    description: "Altera os dados de uma venda",
    tags: ["Vendas"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Id da Venda",
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
            $ref: "#/schemas/Venda",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Venda alterada",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Venda",
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