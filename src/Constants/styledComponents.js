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
