
import { useState } from "react"
import styled from "styled-components"
import { pokeProducts } from "../assets/mockDados.js"
import {Footer, HeaderComponent} from "../Components/components.js"
import { Container, ProductContainer} from "../Components/styledComponents.js"

export default function HomePage() {

    return (
        <Container>
            <HeaderComponent/>
            <ProductContainer>
               { pokeProducts.map ((i, idx) =>
                  <PokeCard key={idx} item={i} />)}
            </ProductContainer>
            <Footer/>
        </Container>
       
    )
}

function PokeCard ({item}) {

    const [selected, setSelected] = useState(false);

    function clickProduct () {
        if (selected) {
            setSelected(false)
        } else if (!selected) {
            setSelected(true)
        }

    }

    return (
       <ProductCard selected={selected}>
            <img alt={item.name} src={item.image}/>
            <p>{item.name}</p>
            <p>{item.type}{(item.type2) ? ` | ${item.type2}`: ""}</p>
            <p>{`R$${item.value.toFixed(2)}`}</p>
            <p>{(selected) ? "Remover do carrinho" :  "Adicionar ao carrinho"}</p>
            <button onClick={()=> clickProduct()}>+</button>
         </ProductCard>
    )
}

const ProductCard= styled.div `
width: 170px;
        height: 270px;
        margin: 15px 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 2px solid gray;
        border-radius: 15px;
        p {
            margin-left: 15px;
        }
        img {
            width: 170px;
            height: 170px;
        }
        button {
            margin: 0 auto;
            background-color: ${props => (props.selected) ? "yellowgreen": "white"};
            border-radius: 50%;
            width: 50px;
            height: 50px;
            :hover {
                background-color: ${props => (props.selected) ? "red": "yellowgreen"}
            }
            font-size: 25px;
        }
`