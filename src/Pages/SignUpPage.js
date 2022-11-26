import { Container, LoginBox } from "../Components/styledComponents.js";
import { HeaderComponent } from "../Components/components.js";
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
      <HeaderComponent />
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
              onChange={(e) => setname(e.target.value)}
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
              onChange={(e) => setUrl(e.target.value)}
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

          <div className="label-input">
            <label for="passwordCheck">Confirme sua Senha</label>
            <input
              className="inputs"
              id="passwordCheck"
              type="password"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              disabled={enable}
              required
            />
          </div>
          <p className="check-password">Senhas não conferem</p>
          <button type="submit" disabled={enable}>
            Cadastrar
          </button>
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
