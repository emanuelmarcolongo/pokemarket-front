import styled from "styled-components";

export const Container = styled.div`
  font-family: "Fira Mono", monospace;
  font-size: 15px;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: white;

  .user {
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }

    ion-icon{
        font-size: 60px;
        border: 1px solid black;
        border-radius: 100%;
        display:${(props) => props.disableIcon}
    }
    .avatar-user {
      border-radius: 100%;
      width: 60px;
      height: 60px;
      margin-right: 8px;
      display:${(props) => props.disableAvatar}
    }

    .myProfile-logout{
        display: flex;
        flex-direction: column;

        button{
            border: none;
            width: 90px;
            margin: 5px 0;
            background-color: #FFFFFF;
            font-size: 12px;
            font-family: "Fira Mono", monospace;

            :hover{
                cursor: pointer;
                text-decoration: underline
            }
        }
    }
  }

  img {
    width: 256px;
    height: 117px;
  }
  p {
    font-weight: 700;
    font-size: 25px;
  }
  box-shadow: 5px 5px 5px 5px #ccc;
  margin-bottom: 15px;
`;

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 15px #ccc;
  margin-top: 15px;
  img {
    width: 200px;
    height: 180px;
  }
  p {
    width: 300px;
    margin: auto 0;
    text-align: justify;
    strong {
      font-weight: 700;
    }
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
`;
export const CarrinhoContainer = styled.div`
  font-family: "Fira Mono", monospace;
  display: flex;
  flex-direction: column;
  width: 20%;
  p {
    font-weight: 700;
    font-size: 30px;
  }
  > div {
    display: flex;
    border: 1px solid black;
    img {
      width: 100px;
    }
    p {
      font-size: 15px;
    }
  }
  button {
    font-family: "Fira Mono", monospace;
    height: 3%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const LoginBox = styled.div`
  width: 480px;
  height: 530px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 15px;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  p {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .inputs {
      width: 360px;
      height: 48px;
      border-radius: 5px;
      margin-top: 8px;
      border: 1px solid #c6c6c6;
      font-size: 22px;
      font-family: "Fira Mono", monospace;
    }

    button {
      margin-top: 15px;
      height: 52px;
      border: 1px solid #c6c6c6;
      border-radius: 5px;
      font-size: 22px;
      font-family: "Fira Mono", monospace;
    }
  }

  .button_sign-up {
    margin-top: 30px;
    border: none;
    font-size: 16px;
    background-color: #ffffff;
    font-family: "Fira Mono", monospace;

    :hover {
      text-decoration: underline;
    }
  }

  button:hover {
    cursor: pointer;
  }
`;
