import express from 'express'
import { pesquisa, infos } from './controladores/filtros.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.get('/', infos)
app.get('/search', pesquisa)

app.listen(3000, () => {
  console.log('Servidor está rodando em http://localhost:3000')
})
