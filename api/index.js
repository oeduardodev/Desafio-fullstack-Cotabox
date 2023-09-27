import express from 'express'
import pesquisa from './controladores/filtros.js'

const app = express()

app.get('/', pesquisa)

app.listen(3000)
