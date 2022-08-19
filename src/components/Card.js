import styled from "styled-components"
import { useState, useEffect } from "react"

export default function Card({select, setSelect, id, acertos, setAcertos}){

    const [tapped, setTapped] = useState(false)
    const [status, setStatus] = useState("Costas")

    console.log("render")

    if (select.length === 2 && select[0] === select[1] && select[0] === id){

        console.log("boa") 
        setAcertos([...acertos, id])
        setSelect([])  

    } else if( tapped === true && select.length === 2 && (acertos.filter(a => a === id).length === 0)) {

        setTimeout(()=>{

            setTapped(!tapped)
            setStatus("Costas")  
            setSelect([])

        }, 1000)

    }

    function Clicked(){
        if (!tapped){
            setTapped(!tapped)
            setSelect([...select, id])
            setStatus(id)  
        }
          
    }

    return(
        <Container onClick={Clicked} color={() => tapped ? ("red"):("blue")}>
            {status}
        </Container>
    )
}
const Container = styled.div`
    color:${props => props.color};
    width: 117px;
    height: 146px;

    background-color: #A7E9AF;
    border: 1px solid #99CEA8;
    border-radius: 5px;

    margin: 17px;

    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:700;
`