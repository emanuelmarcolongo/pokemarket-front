import { Container, LoginBox } from "../Components/styledComponents.js";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);

  function loginUser(e) {
    e.preventDefault();
    setEnable(true);
  }

  return (
    <Container>
      <LoginBox>
        <p>Olá, digite seu e-mail e senha</p>
        <form onSubmit={loginUser}>
          <input
            className="inputs"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={enable}
            required
          />
          <input
            className="inputs"
            placeholder="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={enable}
            required
          />
          <button type="submit">Entrar</button>
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
