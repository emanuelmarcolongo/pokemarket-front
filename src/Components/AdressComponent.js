import styled from "styled-components";
import { useState } from "react";
import { createMemoryHistory } from "@remix-run/router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../Constants/url.js";

export default function AdressComponent({
  changeBox,
  setChangeBox,
  user,
  setUser,
}) {
  const { city, state, CEP, street, number } = user.adress;
  const navigate = useNavigate();

  const [enable, setEnable] = useState(false);

  function signUp(e) {
    e.preventDefault();

    delete user.passwordCheck;

    axios.post(`${URL_BASE}/sign-up`, user).then((res) => {
      navigate("/");
    }).catch((e) => {
      console.log(e)
      setEnable(false)
    });
  }
  return (
    <SignUpBox showContainer={changeBox ? "" : "none"}>
      <p>Preencha todos os campos para finalizar o cadastro</p>
      <form onSubmit={signUp}>
        <div className="label-input">
          <label for="city">Cidade</label>
          <input
            className="inputs"
            id="city"
            type="text"
            value={city}
            onChange={(e) =>
              setUser({
                ...user,
                adress: { ...user.adress, city: e.target.value },
              })
            }
            disabled={enable}
            required
          />
        </div>

        <div className="label-input">
          <label for="state">Estado</label>
          <input
            className="inputs"
            id="state"
            type="text"
            value={state}
            onChange={(e) =>
              setUser({
                ...user,
                adress: { ...user.adress, state: e.target.value },
              })
            }
            disabled={enable}
            required
          />
        </div>

        <div className="label-input">
          <label for="CEP">CEP</label>
          <input
            className="inputs"
            id="CEP"
            type="number"
            value={CEP}
            onChange={(e) =>
              setUser({
                ...user,
                adress: { ...user.adress, CEP: e.target.value },
              })
            }
            disabled={enable}
            required
          />
        </div>

        <div className="label-input">
          <label for="street">Rua</label>
          <input
            className="inputs"
            id="street"
            type="text"
            value={street}
            onChange={(e) =>
              setUser({
                ...user,
                adress: { ...user.adress, street: e.target.value },
              })
            }
            disabled={enable}
            required
          />
        </div>

        <div className="label-input">
          <label for="number">Numero</label>
          <input
            className="inputs"
            id="number"
            type="number"
            value={number}
            onChange={(e) =>
              setUser({
                ...user,
                adress: { ...user.adress, number: e.target.value },
              })
            }
            disabled={enable}
            required
          />
        </div>
        <button type="submit" disabled={enable}>
          Cadastrar
        </button>
      </form>

      <button
        className="button_sign-up"
        onClick={() => setChangeBox(!changeBox)}
      >
        Voltar
      </button>
    </SignUpBox>
  );
}

export const SignUpBox = styled.div`
  width: 480px;
  height: 570px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 15px;
  font-size: 26px;
  display: flex;
  display: ${(props) => props.showContainer};
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

    .label-input {
      display: flex;
      flex-direction: column;
      border: 1px solid #c6c6c6;
      margin-top: 10px;
      border-radius: 5px;
    }

    label {
      font-size: 14px;
      margin-left: 5px;
      margin-top: 5px;
    }

    .inputs {
      width: 360px;
      height: 35px;
      border-radius: 5px;
      border: none;
      font-size: 22px;
      font-family: "Fira Mono", monospace;

      textarea:focus,
      :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }
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

  .check-password {
    font-size: 16px;
    color: red;
    margin-top: 5px;
    display: ${(props) => props.checkPassword};
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
