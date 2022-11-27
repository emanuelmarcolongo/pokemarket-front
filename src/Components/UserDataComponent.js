import styled from "styled-components";
import { AuthContext } from "../Providers/Auth.js";
import React from "react";
import {DataDiv} from './styledComponents.js'

export default function UserData({ handleBox }) {
  const { userData, setUserData } = React.useContext(AuthContext);

  return (
    <DataDiv enable={handleBox}>
      <div className="data-box-user">
        <h2>Nome Usuário: </h2>
        <p>{userData.name}</p>
      </div>
      <div className="data-box-user">
        <h2>Email: </h2>
        <p>{userData.email}</p>
      </div>
    </DataDiv>
  );
}


