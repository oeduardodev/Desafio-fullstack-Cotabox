import { dados } from '../dados.js'

const pesquisa = (req, res) => {
  res.send(dados)
}

export default pesquisa
