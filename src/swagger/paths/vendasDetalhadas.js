export const getPostVendasDetalhadas = { //swagger nesse contexto é uma prática
    get: { // o que o get vai dar de resposta
      description: "Retorna os detalhes das vendas",
      tags: ["VendasDetalhadas"],
      responses: {
        200: {//descrever cada resposta
          description: "Lista dos detalhes das vendas",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/schemas/VendaDetalhada",//vai importar o Venda como esquema
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
      description: "Cria detalhes da venda",
      tags: ["VendasDetalhadas"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/VendaDetalhada",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Detalhes da venda criado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/VendaDetalhada",
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
 
export const getDeletePutVendaDetalhadaById = {
    get: {
      description: "Retorna um detalhe da venda pelo Id",
      tags: ["VendasDetalhadas"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do dos detalhes da venda",
          required: true,
          schema: {
            type: "integer"
          }
        }
      ],
      responses: {
        200: {
          description: "VendaDetalhada",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/VendaDetalhada",
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
      description: "Deleta uma venda detalhada pelo Id",
      tags: ["VendasDetalhadas"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do venda detalhada",
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
              message: "detalhes removidos com sucesso"
            },
          },
        },
        500: {
          description: "Erro interno",
        },
      },
    },
    put: {  
    description: "Altera os dados de uma venda detalhada",
    tags: ["VendasDetalhadas"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Id da venda detalhada",
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
            $ref: "#/schemas/VendaDetalhada",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Venda detalhada alterada",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/VendaDetalhada",
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
