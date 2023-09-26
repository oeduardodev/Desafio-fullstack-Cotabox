import styled from 'styled-components'

export const ContainerMain = styled.main`
  color: ${(props) => props.theme['cinza-100']};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  caption {
    margin: 4rem;
    line-height: 3rem;
  }
`
export const ContainerTabelaGrafico = styled.section`
  display: inline-flex;
`
