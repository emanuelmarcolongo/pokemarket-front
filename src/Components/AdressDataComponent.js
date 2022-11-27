import styled from "styled-components";
import { AuthContext } from "../Providers/Auth.js";
import React from "react";
import { DataDiv } from "./styledComponents.js";

export default function AdressData({ handleBox, saleInfo }) {
  const { userData, setUserData } = React.useContext(AuthContext);
  const { cidade, estado, cep, rua, numero } = saleInfo.adress;
  return (
    <DataDiv enable={handleBox}>
      <div className="data-box-user">
        <h2>Cidade: </h2>
        <p>{cidade}</p>
      </div>
      <div className="data-box-user">
        <h2>Estado: </h2>
        <p>{estado}</p>
      </div>
      <div className="data-box-user">
        <h2>CEP: </h2>
        <p>{cep}</p>
      </div>
      <div className="data-box-user">
        <h2>Rua: </h2>
        <p>{rua}</p>
      </div>
      <div className="data-box-user">
        <h2>Numero: </h2>
        <p>{numero}</p>
      </div>
    </DataDiv>
  );
}
