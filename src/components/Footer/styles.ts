import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  p {
    font-size: 0.9rem;
    font-weight: 300;
    padding: 6rem;
    color: ${(props) => props.theme['cinza-100']};
  }
`
