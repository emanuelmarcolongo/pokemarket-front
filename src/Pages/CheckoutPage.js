import styled from "styled-components"
import { Footer, HeaderComponent } from "../Components/components.js"
import { Container } from "../Components/styledComponents.js"
import dayjs from "dayjs"

export default function CheckoutPage({saleInfo}) {

    const adress = {rua: "", cidade: "", estado: "", cep: "", numero: ""}

    function handleCheckout(e) {
        e.preventDefault();
        saleInfo.adress = adress;
        saleInfo.time = dayjs().format('DD/MM/YYYY  HH:mm');
        console.log(saleInfo)
    }
   

    return (
        <Container>
            <HeaderComponent/>
            <InfoProduct>
                <Column>
                <p>Seus produtos:</p>
                {saleInfo.products.map((i) => 
                    <Flex>
                        <img alt ={i.name} src={i.image}/>
                        <p>Quantidade: x{i.amount}</p>
                    </Flex>
                )}
                <h2>Total: R$ {saleInfo.total}</h2>
                </Column>
                
            </InfoProduct>
            <InfoAdress>
                     <form onSubmit={handleCheckout}>
                    <p>Informações de entrega:</p>
                    <input type="string" requiredtrue onChange={e => adress.cidade = e.target.value} placeholder="Digite sua cidade"></input>
                    <input type="string" required  onChange={e => adress.estado = e.target.value} placeholder="Digite seu estado"></input>
                    <input type="string" required  onChange={e => adress.cep = e.target.value} placeholder="Digite seu CEP"></input>
                    <input type="string" required  onChange={e => adress.rua = e.target.value} placeholder="Digite sua Rua"></input>
                    <input type="string" required  onChange={e => adress.numero = e.target.value} placeholder="Digite seu Número"></input>
                    <p>Forma de pagamento:</p>
                    <input type="string" onChange={e => saleInfo.paymentMethod = e.target.value} placeholder="Qual a forma de pagamento?"></input>
                    
                   

                    <button type="submit" >Finalizar compra!</button>
                    </form>
            </InfoAdress>
            <InfoAdress>
            
            </InfoAdress>

            <Footer/>
        </Container>
        
    )
}



const InfoProduct = styled.div`
 font-family: 'Fira Mono', monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
        width: 100px;
        height: 100px;
    }
    border: 1px solid black;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        margin: 30px 0px ;
       font-weight: 700;
    }
`
const Flex = styled.div`
    display: flex;
   
    align-items: center;
    justify-content: center;
`
const InfoAdress = styled.div`
 font-family: 'Fira Mono', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    form {
        display: flex;
        flex-direction: column;
        input, button {
            font-family: 'Fira Mono', monospace;
            margin: 5px 0px;
        }
    }
    select {
        font-family: 'Fira Mono', monospace;
    }
`