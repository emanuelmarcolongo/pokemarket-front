
import { pokeProducts } from "../assets/mockDados.js"
import {Footer, HeaderComponent} from "../Constants/components.js"
import { Container, ProductContainer} from "../Constants/styledComponents.js"


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
    return (
       <div>
            <img alt={item.name} src={item.image}/>
            <p>{item.name}</p>
            <p>{item.type}{(item.type2) ? ` | ${item.type2}`: ""}</p>
            <p>{`R$${item.value.toFixed(2)}`}</p>
            <p>Add ao Carrinho</p>
            <button>+</button>
         </div>
    )
}