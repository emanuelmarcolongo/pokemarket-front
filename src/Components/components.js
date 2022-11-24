import { Header, StyledFooter } from "../Components/styledComponents.js";
import pokemon from "../assets/img/pokemon.png"
import rocket from "../assets/img/rocket.png"

export function HeaderComponent() {
    return (
      <Header>
            <p>Bem vindo ao PokeMarket</p>
            <img alt = "Pikachu" src={pokemon} />
      </Header>
    )
}

export function Footer () {
    return (
    <StyledFooter>
        <img alt = "equipe rocket" src={rocket} />
        <p><strong>Equipe rocket decolando de novo!</strong><br></br>
            Agora lançando nosso e-commerce <strong>PokeMarket</strong>:<br></br>
            Um lugar onde você pode obter seu tão sonhado pokemon sem precisar se aventurar mundo a fora!
        </p>
        
    </StyledFooter>
    )
    
    
}