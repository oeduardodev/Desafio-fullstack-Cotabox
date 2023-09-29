import { dados } from '../dados.js'

export const infos = (req, res) => {
  res.send(dados)
}

export const pesquisa = (req, res) => {
  const { firstName, lastName, participation } = req.query

  let filtroDePesquisa = dados

  if (firstName) {
    filtroDePesquisa = filtroDePesquisa.filter(
      (item) => item.firstName === firstName,
    )
  }

  if (lastName) {
    filtroDePesquisa = filtroDePesquisa.filter(
      (item) => item.lastName === lastName,
    )
  }

  if (participation) {
    filtroDePesquisa = filtroDePesquisa.filter(
      (item) => item.participation === participation,
    )
  }

  res.send(filtroDePesquisa)
}

export default [pesquisa, infos]
