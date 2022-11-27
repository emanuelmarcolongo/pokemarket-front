import styled from "styled-components";
import { AuthContext } from "../Providers/Auth.js";
import React from "react";
import { DataDiv } from "./styledComponents.js";
import axios from "axios";
import { useEffect } from "react";
import { URL_BASE } from "../Constants/url.js";

export default function SalesData({ handleBox, saleInfo }) {
  const { userData, setUserData } = React.useContext(AuthContext);
  const { cidade, estado, cep, rua, numero } = saleInfo.adress;
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };

  useEffect(() => {
    axios.get(`${URL_BASE}/sale`,config).then((res) => {
      console.log(res.data)
    })
  }, [handleBox]);

  return (
    <DataDiv enable={handleBox}>
      <div className="data-box-user">
        <h2>Cidadeeeee: </h2>
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
