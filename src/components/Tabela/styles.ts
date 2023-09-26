import { styled } from 'styled-components'

export const Tab = styled.table`
  color: ${(props) => props.theme['cinza-100']};
  margin: 0.5rem;
  font-size: 0.8rem;
  text-align: left;
  width: 30rem;
  border-collapse: collapse;
  tr > td {
    height: 5px;
  }
  th,
  td {
    padding: 0.8rem;
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
