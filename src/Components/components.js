import { Header, StyledFooter } from "../Components/styledComponents.js";
import pokemon from "../assets/img/pokemon.png";
import rocket from "../assets/img/rocket.png";
import { AuthContext } from "../Providers/Auth.js";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import user from "../assets/img/user.png";

export function HeaderComponent() {
  const { userData, setUserData } = React.useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setUserData({});
    navigate("/");
  }

  return (
    <Header>
      <p>Bem vindo ao PokeMarket</p>
      <Link to="/home">
        <img alt="Pikachu" src={pokemon} />
      </Link>
      <div className="user">
        <div className="userName-Avatar">
          <img
            className="avatar-user"
            alt="Icone do avatar do usuario"
            src={userData.url === undefined ? user : userData.url}
          />
          <p>{userData.name}</p>
        </div>
        <div className="myProfile-logout">
          <Link to="/perfil">
            <button>Meu Perfil</button>
          </Link>
          <button onClick={() => logout()}>Sair</button>
        </div>
      </div>
    </Header>
  );
}

export function Footer() {
  return (
    <StyledFooter>
      <img alt="equipe rocket" src={rocket} />
      <p>
        <strong>Equipe rocket decolando de novo!</strong>
        <br></br>
        Agora lançando nosso e-commerce <strong>PokeMarket</strong>:<br></br>
        Um lugar onde você pode obter seu tão sonhado pokemon sem precisar se
        aventurar mundo a fora!
      </p>
    </StyledFooter>
  );
}
