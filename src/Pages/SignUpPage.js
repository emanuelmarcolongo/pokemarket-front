import { Container, LoginBox } from "../Components/styledComponents.js";
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

