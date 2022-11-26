import styled from "styled-components";
import { AuthContext } from "../Providers/Auth.js";
import React from "react";

export default function UserData({nameSelected}){
    const {userData} = React.useContext(AuthContext)

    return(
        <DataDiv>
          <p>{nameSelected}</p>
        </DataDiv>
    )
};

const DataDiv = styled.div`
  height: 450px;
  width: 520px;
  border-radius: 5px;
  margin-left: 150px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

p{
    font-size: 24px;
    margin: 10px
}
`;