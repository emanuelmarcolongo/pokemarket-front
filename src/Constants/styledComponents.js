import styled from "styled-components"


export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
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
    box-shadow: 5px 5px #ccc;
`

export const StyledFooter = styled.div`
    display: flex;
    img {
        width: 200px;
        height: 180px;
    }
    p {
        width: 300px;
        margin: auto 0;
    }
`
export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    div {
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
            background-color: gray;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            :hover {
                background-color: greenyellow;
            }
            font-size: 25px;
        }
    }
`