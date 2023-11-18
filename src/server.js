import express from 'express'
import VendaRoutes from './routes/VendaRoutes.js'
import VendaDetalhadaRoutes from './routes/VendaDetalhadaRoutes.js'
import ClienteRoutes from './routes/ClienteRoutes.js'
import db from './database/config.js'
import FuncionariosRoutes from './routes/FuncionarioRoutes.js'
import ProdutoServicoRoutes from './routes/ProdutoServicoRoutes.js'
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger/config.js"

const app = express()
app.use(express.json())

app.get('/healthcheck',(req,res)=>{
    res.send('OK!')
})

const vendaRoutes = new VendaRoutes(db)
app.use('/vendas',vendaRoutes.routes())

const vendaDetalhadaRoutes = new VendaDetalhadaRoutes(db)
app.use('/vendaDetalhada',vendaDetalhadaRoutes.routes())

const clienteRoutes = new ClienteRoutes(db)
app.use('/clientes',clienteRoutes.routes())

const funcionarioRoutes = new FuncionariosRoutes(db)
app.use('/funcionarios',funcionarioRoutes.routes())

const produtoServicoRoutes = new ProdutoServicoRoutes(db)
app.use('/produtoServicos',produtoServicoRoutes.routes())

//Swagger
app.use('/docs', swaggerUi.serve,
swaggerUi.setup(swaggerDocument, { explorer: true }))

//Render
const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log('Server rodando na porta '+port)
})
