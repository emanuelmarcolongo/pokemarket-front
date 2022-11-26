import { Container, LoginBox } from "../Components/styledComponents.js";
import { HeaderComponent } from "../Components/components.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { URL_BASE } from "../Constants/url.js";
import { AuthContext } from "../Providers/Auth.js";

export default function LoginPage({ saleInfo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const { setUserData } = React.useContext(AuthContext);
  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();
    setEnable(true);

    const newLogin = {
      email,
      password,
    };

    axios
      .post(`${URL_BASE}/login`, newLogin)
      .then((res) => {
        const { token, name, email } = res.data;
        saleInfo.name = name;
        saleInfo.email = email;
        setUserData(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setEnable(false);
      });
  }

  return (
    <Container>
      <HeaderComponent />
      <LoginBox>
        <p>Olá, digite seu e-mail e senha</p>
        <form onSubmit={loginUser}>
          <div className="label-input">
            <label for="email">Email</label>
            <input
              className="inputs"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={enable}
              required
            />
          </div>
          <div className="label-input">
            <label for="password">Senha</label>
            <input
              className="inputs"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={enable}
              required
            />
          </div>
          <button type="submit" disabled={enable}>
            Entrar
          </button>
        </form>
        <Link to="/cadastro">
          <button className="button_sign-up">
            Não possui cadastro? Clique aqui
          </button>
        </Link>
      </LoginBox>
    </Container>
  );
}
