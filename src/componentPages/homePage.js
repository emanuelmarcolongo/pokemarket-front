
import { pokeProducts } from "../assets/mockDados.js"
import {Footer, HeaderComponent} from "../Constants/components.js"
import { Container, ProductContainer} from "../Constants/styledComponents.js"


export default function HomePage() {
    return (
        <Container>
            <HeaderComponent/>
            <ProductContainer>
               { pokeProducts.map ((i) =>
                <li> 
                    <img src={i.image}/>
                    <p>{i.name}</p>
                    <p>{i.type}{(i.type2) ? `/ ${i.type2}`: ""}</p>
                    <p>{`R$${i.value.toFixed(2)}`}</p>
                    <p>Add ao Carrinho</p>
                    <button>+</button>
                </li>)}
            </ProductContainer>
            <Footer/>
        </Container>
       
    )
}