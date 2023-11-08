import express from 'express'
import db from './database/config.js'


const app = express()
app.use(express.json())

app.get('/healthcheck',(req,res)=>{
    res.send('OK!')
})

//const vendaRoutes = new VendaRoutes(db)
//app.use('/venda',vendaRoutes.routes())


app.listen(3000,() => {
    console.log('Server rodando na porta 3000')
})