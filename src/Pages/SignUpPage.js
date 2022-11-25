import { Container } from "../Components/styledComponents.js";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL_BASE } from "../Constants/url.js";

export default function SignUpPage() {
  const [name, setname] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [enable, setEnable] = useState(false);
  const navigate = useNavigate();

  function signUpUser(e) {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert("As senhas não conferem");
      return;
    }
    setEnable(true);

    const newUser = {
      name,
      url,
      email,
      password,
    };

    axios
      .post(`${URL_BASE}/sign-up`, newUser)
      .then(() => navigate("/"))
      .catch((e) => {
        console.log(e.response.data.message);
        setEnable(false);
      });
  }

  return (
    <Container>
      <LoginBox>
        <p>Preencha todos os campos para realizar o cadastro</p>
        <form onSubmit={signUpUser}>
          <input
            className="inputs"
            type="text"
            placeholder="Nome usuario"
            value={name}
            onChange={(e) => setname(e.target.value)}
            disabled={enable}
            required
          />
          <input
            className="inputs"
            type="text"
            placeholder="Url avatar"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={enable}
            required
          />
          <input
            className="inputs"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={enable}
            required
          />
          <input
            className="inputs"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={enable}
            required
          />
          <input
            className="inputs"
            type="password"
            placeholder="Confirmação de senha"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            disabled={enable}
            required
          />
          <button type="submit" disabled={enable}>Cadastrar</button>
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

  p {
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
