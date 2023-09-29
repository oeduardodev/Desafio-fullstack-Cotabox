import { ContainerMain, ContainerTabelaGrafico } from './styles'

import { Tabela } from '../Tabela'
import { Grafico } from '../Grafico'

export function Main() {
  return (
    <ContainerMain>
      <caption>
        <h1>DATA</h1>
        <p>Lorem ipsum dolor sit amet quibusdam reiciendis fugit quas.</p>
      </caption>
      <ContainerTabelaGrafico>
        <Tabela />
        <Grafico />
      </ContainerTabelaGrafico>
    </ContainerMain>
  )
}
