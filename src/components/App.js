import styled from "styled-components"
import { useState } from "react"
import Card from "./Card"

export default function App(){

    const arr = []
    for (let i = 1; i < (14 + 1) / 2; i++){
        arr.push(i)
        arr.push(i)
    }

    const [select, setSelect] = useState([])
    const [acertos, setAcertos] = useState([])

    console.log(acertos)

    return(
        <Container>

                <Menu>PARROT CARD GAME</Menu>

                <ContainerCards>

                    {arr.map((i)=><Card id={i} select={select} setSelect={setSelect} acertos={acertos} setAcertos={setAcertos}/>)}
                    
                </ContainerCards>
             
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    height:100vh;

    display:flex;
    align-items:center;
    justify-content:center;

    background-color:#EEF9BF;  
`
const Menu = styled.div`
    position:fixed;
    top:4vh;

    font-size:56px;
    color:#75B79E;
    font-weight: 700;
`
const ContainerCards = styled.div`
    //background-color:red;
    width:68%;
    height:50%;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;

    margin-bottom:100px;
`