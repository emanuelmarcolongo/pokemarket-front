import { Container } from "../Components/styledComponents.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <Container>
      <LoginBox>
        <p>Preencha todos os campos para realizar o cadastro</p>
        <form>
          <input className="inputs" placeholder="Nome usuario" />
          <input className="inputs" placeholder="Url avatar" />
          <input className="inputs" placeholder="Email" />
          <input className="inputs" placeholder="Senha" />
          <input className="inputs" placeholder="Confirmação de senha" />
          <button>Cadastrar</button>
        </form>
        <Link to="/">
          <button className="button_sign-up">
            Já possui cadastro? Clique aqui
          </button>
        </Link>
      </LoginBox>
    </Container>
  );
}

const LoginBox = styled.div`
  background-color: red;
  width: 480px;
  height: 530px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 100px;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  p{
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .inputs {
      width: 360px;
      height: 48px;
      border-radius: 5px;
      margin-top: 8px;
      border: 1px solid #c6c6c6;
      font-size: 22px;
      font-family: "Fira Mono", monospace;
    }

    button {
      margin-top: 15px;
      height: 52px;
      border: 1px solid #c6c6c6;
      border-radius: 5px;
      font-size: 22px;
      font-family: "Fira Mono", monospace;
    }
  }

  .button_sign-up {
    margin-top: 30px;
    border: none;
    font-size: 16px;
    background-color: red;
    font-family: "Fira Mono", monospace;

    :hover {
      text-decoration: underline;
    }
  }

  button:hover {
    cursor: pointer;
  }
`;
