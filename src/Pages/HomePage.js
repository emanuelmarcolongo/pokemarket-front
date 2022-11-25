
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { pokeProducts } from "../assets/mockDados.js"
import {Footer, HeaderComponent} from "../Components/components.js"
import { CarrinhoContainer, Container, ContentContainer, ProductContainer} from "../Components/styledComponents.js"

let soma = 0;
export default function HomePage({saleInfo}) {
    const navigate = useNavigate();
    const [cartProducts, setCartProducts] = useState([]);

    totalCart();


    function handleCheckout() {
       
        if (cartProducts.length === 0) {
            alert("Adicione ao menos um item ao seu carrinho antes de prosseguir");
            return;
        }

        saleInfo.products = [...cartProducts];
        saleInfo.total = Number(soma);
        console.log(saleInfo);
        navigate("/checkout");
    }

    function totalCart () {
        const arr = [];
        soma = 0 ;
        
        cartProducts.forEach((i) => {
         arr.push(i.value * i.amount)
        })
        arr.forEach((i) => {
            soma += i;
        })
    }
    function handleSub (item, id) {
        if(item.amount === 1){
            return;
        }
         item.amount--;
         setCartProducts([...cartProducts])
    }

    function handleSum(item) {
        item.amount++;
        setCartProducts([...cartProducts])
    }

    return (
        <Container>
            <HeaderComponent/>
            <ContentContainer>
            <ProductContainer>
               { pokeProducts.map ((i, idx) =>
                  <PokeCard cart={cartProducts} setCart={setCartProducts} key={idx} item={i} />)}
            </ProductContainer>
            <CarrinhoContainer>
                <p>Carrinho:</p>
                {cartProducts.map((i, idx) => 
                <div key={idx}>
                    <img alt={i.name} src={i.image}/>
                    <div>
                        <p>Preço: R${i.value.toFixed(2)}</p>
                        <p>Quantidade: {i.amount}</p>
                        <p>Total: {(i.value*i.amount).toFixed(2)}</p>
                        <div>
                            <button onClick={()=> handleSub(i, i.id)}>-</button>
                            <button onClick={()=> handleSum(i, i.id)}>+</button>
                        </div>
                    </div>
                </div>
                )}
                <p>Total: {soma.toFixed(2)}</p>

                <button onClick={handleCheckout}>Prosseguir para o checkout</button>
            </CarrinhoContainer>
            </ContentContainer>
           
            <Footer/>
        </Container>
       
    )
}

function PokeCard ({item, cart, setCart}) {

    const [selected, setSelected] = useState(false);

    function clickProduct (item, id) {
        if (selected) {
            const newCart = cart.filter((i) => i.id !== id);
            setCart([...newCart]);
            setSelected(false);
           
        } else if (!selected) {
            const newItem = {...item, amount: 1}
            setCart([...cart, newItem]);
            setSelected(true);
        }

    }

    return (
       <ProductCard selected={selected}>
            <img alt={item.name} src={item.image}/>
            <p>{item.name}</p>
            <p>{item.type}{(item.type2) ? ` | ${item.type2}`: ""}</p>
            <p>{`R$${item.value.toFixed(2)}`}</p>
            <p>{(selected) ? "Remover do carrinho" :  "Adicionar ao carrinho"}</p>
            <button onClick={()=> clickProduct(item, item.id)}>+</button>
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
        box-shadow: 3px 3px 3px 3px #ccc;
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