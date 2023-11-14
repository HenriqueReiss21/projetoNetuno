export const getPostProdutoServico = { //swagger nesse contexto é uma prática
    get: { // o que o get vai dar de resposta
      description: "Retorna a lista de produtos e serviços",
      tags: ["ProdutoServicos"],
      responses: {
        200: {//descrever cada resposta 
          description: "Lista de produtos e serviços",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/schemas/ProdutoServico",//vai importar o Venda como esquema
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
      description: "Cria um novo Produto ou Serviço ",
      tags: ["ProdutoServicos"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/ProdutoServico",
            },
          },
        },
      },
      responses: {
        200: {
          description: "ProdutoServico Criado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/ProdutoServico",
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
  
export const getDeletePutProdutoServicoById = {
    get: {
      description: "Retorna um Produto ou Serviço pelo Id",
      tags: ["ProdutoServicos"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do Produto ou Serviço",
          required: true,
          schema: {
            type: "integer"
          }
        }
      ],
      responses: {
        200: {
          description: "ProdutoServicos",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/ProdutoServico",
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
      description: "Deleta um Produto ou Serviço pelo Id",
      tags: ["ProdutoServicos"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do Produto ou Serviço",
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
              message: "Produto ou Servico removida com sucesso"
            },
          },
        },
        500: {
          description: "Erro interno",
        },
      },
    },
    put: {   
    description: "Altera os dados de um Produto ou Serviço",
    tags: ["ProdutoServicos"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Id do Produto ou Servico",
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
            $ref: "#/schemas/ProdutoServico",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Produto ou Serviço alterado",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/ProdutoServico",
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