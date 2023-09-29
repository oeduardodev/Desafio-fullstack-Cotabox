import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['azul-100']};

  form {
    display: flex;
    margin: 0 auto;
    padding: 3rem;

    input {
      width: 16rem;
      margin: 0 0.5rem 0 0.5rem;
      display: flex;
      padding: 1rem;
      outline: 0;
      border: 0;
      color: ${(props) => props.theme['cinza-100']};
      border-radius: 3px;
    }

    button {
      margin: 0 0.5rem 0 0.5rem;
      font-size: 1rem;
      font-weight: 700;
      width: 8rem;
      color: ${(props) => props.theme['branco-100']};
      background-color: ${(props) => props.theme['azul-100']};
      border: 2px solid ${(props) => props.theme['branco-100']};
      border-radius: 3px;
    }

    button:hover {
      cursor: pointer;
      color: ${(props) => props.theme['azul-100']};
      background: ${(props) => props.theme['branco-100']};
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
      transition: 0.5s ease-in-out;
    }
  }
`
