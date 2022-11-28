import styled from "styled-components";
import { AuthContext } from "../Providers/Auth.js";
import React from "react";
import { DataDiv } from "./styledComponents.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../Constants/url.js";

export default function AdressData({ handleBox, saleInfo }) {
  const { userData, setUserData } = React.useContext(AuthContext);
  const [adress, setAdress] = useState({
    cidade:"",
    estado: "",
    cep: "",
    rua:"",
    numero: ""
  });
  const { cidade, estado, cep, rua, numero } = adress;
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  saleInfo.adress = adress;
  useEffect(() => {
    axios
      .get(`${URL_BASE}/adress`, config)
      .then((res) => {
        setAdress(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
