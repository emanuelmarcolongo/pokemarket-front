import { Container } from "../Components/styledComponents.js";
import { HeaderComponent, ProfileItens } from "../Components/components.js";
import styled from "styled-components";
import { useState } from "react";

export default function MyProfilePage() {
  const [sideBarSelected, setSideBarSelected] = useState("Seus Dados");
  const [selectedItem, setSelectedItem] = useState(false);
  return (
    <Container>
      <HeaderComponent />
      <MyProfileSection>
        <SideBar>
          <ul className="sidebar">
            <ProfileItens
              name="Seus Dados"
              icon="person-circle-outline"
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
            <ProfileItens
              name="Endereço"
              icon="home-outline"
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
            <ProfileItens
              name="Pedidos"
              icon="cart-outline"
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          </ul>
        </SideBar>

        <DataDiv>
          <p>{sideBarSelected}</p>
        </DataDiv>
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

const DataDiv = styled.div`
  height: 450px;
  width: 520px;
  border-radius: 5px;
  margin-left: 150px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
