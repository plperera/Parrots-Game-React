import styled from "styled-components"
import { useState, useEffect } from "react"
import front from "../img/front.png"
import bobrossparrot from "../img/bobrossparrot.gif"
import explodyparrot from "../img/explodyparrot.gif"
import fiestaparrot from "../img/fiestaparrot.gif"
import metalparrot from "../img/metalparrot.gif"
import revertitparrot from "../img/revertitparrot.gif"
import tripletsparrot from "../img/tripletsparrot.gif"
import unicornparrot from "../img/unicornparrot.gif"

export default function Card({select, setSelect, id, acertos, setAcertos}){

    const [tapped, setTapped] = useState(false)
    const [status, setStatus] = useState("Costas")

    console.log("render")

    let reference = converterParaGif(id)

    function converterParaGif(numero){
        switch (numero) {
            case 1:
                return bobrossparrot
            case 2:
                return explodyparrot
            case 3:
                return fiestaparrot
            case 4:
                return metalparrot
            case 5:
                return revertitparrot
            case 6:
                return tripletsparrot
            case 7:
                return unicornparrot
            default:
                return ""
        }
    }

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
            <img src={reference} alt={id}/>
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