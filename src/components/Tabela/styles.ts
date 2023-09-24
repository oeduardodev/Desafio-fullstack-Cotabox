import { styled } from 'styled-components'

export const Tab = styled.table`
  text-align: left;
  width: 50rem;
  border-collapse: collapse;
  thead {
    width: 10rem;
  }
  th,
  td {
    padding: 1rem;
    border-collapse: collapse;
    border: 1px solid ${(props) => props.theme['cinza-100']};
  }
  td:first-child {
    text-align: center;
    width: 1rem;
  }
  th:first-child {
    width: 1rem;
  }
  td:last-child {
    text-align: center;
    width: 2rem;
  }
  th:last-child {
    text-align: center;
    width: 2rem;
  }
`
