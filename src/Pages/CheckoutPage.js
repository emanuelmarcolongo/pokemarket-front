import styled from "styled-components";
import { Footer, HeaderComponent } from "../Components/components.js";
import { Container } from "../Components/styledComponents.js";
import dayjs from "dayjs";
import React, { useState } from "react";
import axios from "axios";
import { URL_BASE } from "../Constants/url.js";
import { AuthContext } from "../Providers/Auth.js";

export default function CheckoutPage({ saleInfo }) {
  const { userData } = React.useContext(AuthContext);

  const [adress, setAdress] = useState({
    rua: "",
    cidade: "",
    estado: "",
    cep: "",
    numero: "",
  });

  function handleCheckout(e) {
    e.preventDefault();
    setAdress({
      ...adress,
      [e.target.name]: e.target.value,
    });
    saleInfo.adress = adress;
    saleInfo.time = dayjs().format("DD/MM/YYYY  HH:mm");

    axios
      .post(`${URL_BASE}/sale`, saleInfo, {
        headers: { Authorization: `Bearer ${userData.token}` },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }

  return (
    <Container>
      <HeaderComponent />
      <InfoProduct>
        <Column>
          <p>Seus produtos:</p>
          {saleInfo.products.map((i) => (
            <Flex>
              <img alt={i.name} src={i.image} />
              <p>Quantidade: x{i.amount}</p>
            </Flex>
          ))}
          <h2>Total: R$ {saleInfo.total}</h2>
        </Column>
      </InfoProduct>
      <InfoAdress>
        <form onSubmit={handleCheckout}>
          <p>Informações de entrega:</p>
          <input
            name="cidade"
            value={adress.cidade}
            type="string"
            requiredtrue
            onChange={handleCheckout}
            placeholder="Digite sua cidade"
          ></input>
          <input
            name="estado"
            value={adress.estado}
            type="string"
            required
            onChange={handleCheckout}
            placeholder="Digite seu estado"
          ></input>
          <input
            name="cep"
            value={adress.cep}
            type="string"
            required
            onChange={handleCheckout}
            placeholder="Digite seu CEP"
          ></input>
          <input
            name="rua"
            value={adress.rua}
            type="string"
            required
            onChange={handleCheckout}
            placeholder="Digite sua Rua"
          ></input>
          <input
            name="numero"
            value={adress.numero}
            type="string"
            required
            onChange={handleCheckout}
            placeholder="Digite seu Número"
          ></input>
          <p>Forma de pagamento:</p>
          <div className="payment">
            <label for="credit-card">Cartão de Crédito</label>
            <input
              type="checkbox"
              id="credit-card"
              onChange={(e) => (saleInfo.paymentMethod = "Cartão de Credito")}
            ></input>
          </div>

          <div className="payment">
            <label for="credit-card">Pix</label>
            <input
              type="checkbox"
              id="credit-card"
              onChange={(e) => (saleInfo.paymentMethod = "Pix")}
            ></input>
          </div>

          <div className="payment">
            <label for="credit-card">Boleto</label>
            <input
              type="checkbox"
              id="credit-card"
              onChange={(e) => (saleInfo.paymentMethod = "Boleto")}
            ></input>
          </div>

          <button type="submit">Finalizar compra!</button>
        </form>
      </InfoAdress>
      <InfoAdress></InfoAdress>

      <Footer />
    </Container>
  );
}

const InfoProduct = styled.div`
  font-family: "Fira Mono", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;


  img {
    width: 100px;
    height: 100px;
  }
  border: 1px solid black;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 30px 0px;
    font-weight: 700;
  }
`;
const Flex = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;
const InfoAdress = styled.div`
  font-family: "Fira Mono", monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .payment{
    display: flex;
    justify-content: space-between;
    align-items: center
  }
  form {
    display: flex;
    flex-direction: column;
    input,
    button {
      font-family: "Fira Mono", monospace;
      margin: 5px 0px;
    }
  }
  select {
    font-family: "Fira Mono", monospace;
  }
`;
