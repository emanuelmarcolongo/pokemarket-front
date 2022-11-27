import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginBox } from "./styledComponents.js";
import axios from "axios";
import { URL_BASE } from "../Constants/url.js";

export default function SignUpComponent({ user, setUser }) {
  const { name, url, email, password, passwordCheck } = user;
  const [enable, setEnable] = useState(false);
  const navigate = useNavigate();

  function signUpUser(e) {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert("As senhas não conferem");
      return;
    }
    setEnable(true);
    delete user.passwordCheck;
    axios
      .post(`${URL_BASE}/sign-up`, user)
      .then((res) => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setEnable(false);
      });
  }
  return (
    <LoginBox checkPassword={password === passwordCheck ? "none" : ""}>
      <p>Preencha todos os campos para realizar o cadastro</p>
      <form onSubmit={signUpUser}>
        <div className="label-input">
          <label for="name">Nome Usuario</label>
          <input
            className="inputs"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            disabled={enable}
            required
          />
        </div>

        <div className="label-input">
          <label for="url">Url Avatar</label>
          <input
            className="inputs"
            id="url"
            type="text"
            value={url}
            onChange={(e) => setUser({ ...user, url: e.target.value })}
            disabled={enable}
            required
          />
        </div>

        <div className="label-input">
          <label for="email">Email</label>
          <input
            className="inputs"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            disabled={enable}
            required
          />
        </div>

        <div className="label-input">
          <label for="passwordCheck">Confirme sua Senha</label>
          <input
            className="inputs"
            id="passwordCheck"
            type="password"
            value={passwordCheck}
            onChange={(e) =>
              setUser({ ...user, passwordCheck: e.target.value })
            }
            disabled={enable}
            required
          />
        </div>
        <p className="check-password">Senhas não conferem</p>
        <button type="submit" disabled={enable}>
          Continuar
        </button>
      </form>
      <Link to="/">
        <button className="button_sign-up">
          Já possui cadastro? Clique aqui
        </button>
      </Link>
    </LoginBox>
  );
}
