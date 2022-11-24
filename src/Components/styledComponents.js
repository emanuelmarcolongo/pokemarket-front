import styled from "styled-components"


export const Container = styled.div`
    font-family: 'Fira Mono', monospace;
    font-size: 15px;
    justify-content: center;
    align-items: center;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    background-color: white;
    img {
        width: 256px;
        height: 117px;
    }
    p {
        font-weight: 700;
        font-size: 25px;
    }
    box-shadow: 5px 5px 5px 5px #ccc;
    margin-bottom: 15px;
`

export const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px 15px #ccc;
    margin-top: 15px;
    img {
        width: 200px;
        height: 180px;
    }
    p {
        width: 300px;
        margin: auto 0;
        text-align: justify;
        strong {
            font-weight: 700;
        }
    }
`
export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;
`
export const CarrinhoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    p {
        font-weight: 700;
        font-size: 30px;
    }
    > div {
        display: flex;
        border: 1px solid black;
        img {
            width: 100px;
        }
        p {
            font-size: 15px;
        }
    }
`

export const ContentContainer = styled.div`
    display: flex;
`