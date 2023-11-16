export const getPostClientes = { //swagger nesse contexto é uma prática
    get: { // o que o get vai dar de resposta
      description: "Retorna a lista de clientes",
      tags: ["Clientes"],
      responses: {
        200: {//descrever cada resposta 
          description: "Lista de clientes",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/schemas/Cliente",//vai importar o Venda como esquema
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
      description: "Cria um novo cliente",
      tags: ["Clientes"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Cliente",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Cliente criado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/Cliente",
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
  
export const getDeletePutClienteById = {
    get: {
      description: "Retorna um cliente pelo Id",
      tags: ["Clientes"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do Cliente",
          required: true,
          schema: {
            type: "integer"
          }
        }
      ],
      responses: {
        200: {
          description: "Cliente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/Cliente",
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
      description: "Deleta um cliente pelo Id",
      tags: ["Clientes"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do cliente",
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
              message: "Cliente removido com sucesso"
            },
          },
        },
        500: {
          description: "Erro interno",
        },
      },
    },
    put: {   
    description: "Altera os dados de um cliente",
    tags: ["Clientes"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Id do Cliente",
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
            $ref: "#/schemas/Cliente",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Cliente alterado",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Cliente",
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