import { Container } from "../Components/styledComponents.js";
import { HeaderComponent } from "../Components/components.js";
import styled from "styled-components";

export default function MyProfilePage() {
  return (
    <Container>
      <HeaderComponent />
      <MyProfileDiv>
        <ul className="sidebar">
          <li>
            <ion-icon name="person-circle-outline"></ion-icon>
            <button>Seus Dados</button>
          </li>
          <li>
            <ion-icon name="home-outline"></ion-icon>
            <button>Endereço</button>
          </li>
          <li>
            <ion-icon name="cart-outline"></ion-icon>
            <button>Pedidos</button>
          </li>
        </ul>
      </MyProfileDiv>
    </Container>
  );
}


const MyProfileDiv = styled.div`
  .sidebar {
    border-radius: 5px;
    margin: 25px 0 0 15px;
    width: 200px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
        width: 120px;
        text-align: left;
        border: none;
        background-color: #FFFFFF;
        font-size: 18px;

        :hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }

    ion-icon {
      font-size: 26px;
    }

    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 180px;
      height: 50px;
      border-bottom: 1px solid #c6c6c6;

      :last-child {
        border: none;
      }
    }
  }
`;
