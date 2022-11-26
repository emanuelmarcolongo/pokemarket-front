import { Header, StyledFooter } from "../Components/styledComponents.js";
import pokemon from "../assets/img/pokemon.png";
import rocket from "../assets/img/rocket.png";
import { AuthContext } from "../Providers/Auth.js";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import user from "../assets/img/user.png";
import styled from "styled-components";

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

export function ProfileItens({ name, icon }) {
  const [selected, setSelected] = useState("Seus Dados");


  function selectItem(e) {
    setSelected(name);
  }
  return (
    <ItensSideBar disable={selected === name ? "" : "none"}>
      <div className="line" />
      <ion-icon name={icon}></ion-icon>
      <button onClick={() => selectItem()}>{name}</button>
    </ItensSideBar>
  );
}

const ItensSideBar = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 50px;
  border-bottom: 1px solid #c6c6c6;

  ion-icon {
    font-size: 26px;
  }

  :last-child {
    border: none;
  }
  .line {
    background-color: rgba(100, 100, 100);
    width: 6px;
    height: 38px;
    border-radius: 10px;
    display: ${(props) => props.disable};
  }

  button {
    width: 120px;
    text-align: left;
    border: none;
    background-color: #ffffff;
    font-size: 18px;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
