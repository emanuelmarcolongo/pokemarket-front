import { Container, LoginBox } from "../Components/styledComponents.js";
import { HeaderComponent } from "../Components/components.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SignUpComponent from "../Components/SignUpComponent.js";
import AdressComponent from "../Components/AdressComponent.js";

export default function SignUpPage() {
  const [user, setUser] = useState({
    name: "",
    url: "",
    email: "",
    password: "",
    passwordCheck: "",
    adress: {
      city:"",
      state:"",
      CEP: "",
      street: "",
      number: "",
    },
  });
  const [changeBox, setChangeBox] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderComponent />
      <SignUpComponent
        user={user}
        setUser={setUser}
        changeBox={changeBox}
        setChangeBox={setChangeBox}
      />
      <AdressComponent
        user={user}
        setUser={setUser}
        changeBox={changeBox}
        setChangeBox={setChangeBox}
      />
    </Container>
  );
}
