import { ContainerMain, ContainerTabela } from './styles'

import { Tabela } from '../Tabela'

export function Main() {
  return (
    <ContainerMain>
      <caption>
        <h1>DATA</h1>
        <p>Lorem ipsum dolor sit amet quibusdam reiciendis fugit quas.</p>
      </caption>
      <ContainerTabela>
        <Tabela />
      </ContainerTabela>
    </ContainerMain>
  )
}
