import { Container } from "../Components/styledComponents.js";
import { HeaderComponent } from "../Components/components.js";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { AuthContext } from "../Providers/Auth.js";
import React from "react";
import UserData from "../Components/UserDataComponent.js";
import AdressData from "../Components/AdressDataComponent.js";
import { useNavigate } from "react-router-dom";
import SalesData from "../Components/SalesDataComponent.js";

export default function MyProfilePage({saleInfo}) {
  const [selectedItem, setSelectedItem] = useState("Seus Dados");
  const { userData } = React.useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.token === undefined) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <HeaderComponent />
      <MyProfileSection>
        <SideBar>
          <ul className="sidebar">
            <ItensSideBar disable={selectedItem === "Seus Dados" ? "" : "none"}>
              <div className="line" />
              <ion-icon name="person-circle-outline"></ion-icon>
              <button onClick={() => setSelectedItem("Seus Dados")}>
                Seus Dados
              </button>
            </ItensSideBar>

            <ItensSideBar disable={selectedItem === "Endereço" ? "" : "none"}>
              <div className="line" />
              <ion-icon name="home-outline"></ion-icon>
              <button onClick={() => setSelectedItem("Endereço")}>Endereço</button>
            </ItensSideBar>

            <ItensSideBar disable={selectedItem === "Pedidos" ? "" : "none"}>
              <div className="line" />
              <ion-icon name="cart-outline"></ion-icon>
              <button onClick={() => setSelectedItem("Pedidos")}>Pedidos</button>
            </ItensSideBar>
          </ul>
        </SideBar>

        <BoxData>
          <h1>{selectedItem}</h1>
          <UserData handleBox={selectedItem === "Seus Dados" ? "" : "none"} />
          <AdressData saleInfo={saleInfo} handleBox={selectedItem === "Endereço" ? "" : "none"} />
          <SalesData saleInfo={saleInfo} handleBox={selectedItem=== "Pedidos" ? "" : "none"} />
        </BoxData>
      </MyProfileSection>
    </Container>
  );
}

const MyProfileSection = styled.section`
  display: flex;
  margin: 25px 0 0 15px;
`;

const SideBar = styled.div`
  .sidebar {
    border-radius: 5px;
    width: 200px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

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

const BoxData = styled.div`
  width: 520px;
  border-radius: 5px;
  margin-left: 150px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  h1 {
    font-size: 24px;
    margin: 10px;
  }
`;
