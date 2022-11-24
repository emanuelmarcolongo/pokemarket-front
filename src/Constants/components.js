import { Header, StyledFooter } from "../Constants/styledComponents.js";
import pokemon from "../assets/pokemon.png"
import rocket from "../assets/rocket.png"

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
        <p>Sobre nós: Equipe rocket decolando de novo!
            Agora lançando nosso e-commerce para te entregar aquele tão sonhado pokemon!!
            Sem sair de casa, sem esforço! 
        </p>
        
    </StyledFooter>
    )
    
    
}