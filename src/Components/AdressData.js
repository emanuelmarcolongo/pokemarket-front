import styled from "styled-components";
import { AuthContext } from "../Providers/Auth.js";
import React from "react";
import {DataDiv} from './styledComponents.js'

export default function AdressData({ handleBox }) {
  const { userData, setUserData } = React.useContext(AuthContext);

  return (
    <DataDiv enable={handleBox}>
      <div className="data-box-user">
        <h2>Cidade: </h2>
        <p></p>
      </div>
      <div className="data-box-user">
        <h2>Estado:  </h2>
        <p></p>
      </div>
      <div className="data-box-user">
        <h2>CEP:  </h2>
        <p></p>
      </div>
      <div className="data-box-user">
        <h2>Rua:  </h2>
        <p></p>
      </div>
      <div className="data-box-user">
        <h2>Numero:  </h2>
        <p></p>
      </div>
    </DataDiv>
  );
}
