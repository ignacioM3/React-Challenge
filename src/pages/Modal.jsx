import React, { useState } from 'react'
import styled from 'styled-components'
import preguntas from '../../option'
import usePokemon from '../hooks/usePokemon'
import Ganador from '../components/Ganador'


const Modal = () => {
    const {setActiveJ, contador, setContador, ganador, setGanador} = usePokemon()
    const [pregunta, setPregunta] = useState(0)
    
    const [activeError, setActiveError] = useState("")

    const handlePregunta = (id) =>{
        if(preguntas[pregunta].true === id){
            if(pregunta < 3){
                setPregunta(state => state + 1)
            }
            if(pregunta === 2){
                setGanador(true)
            }

        }else{
            setActiveError("Lo siento respuesta incorrecta")
            setContador(state => state - 1)
        }

    }


    return (
        <Container>
            <ModalContent>
                <Title>¿Cuestionario Pokemon?</Title>
                {!ganador && <span>intentos: {contador}</span>}
                <ContainerPreguntas>
                    {ganador ? 
                    <>
                        <Ganador />
                    </> :
                     contador <= 0 ? 
                     <>
                        <Title>Lo siento te quedaste sin intentos</Title>
                     </> : (
                        activeError.length > 0 ? (
                            <span>{activeError}</span>
                        ) :
                        preguntas.map((ask, index) => (
                            pregunta === index ? (
                                <div key={index}> 
                                <Pregunta>{ask.pregunta}</Pregunta>
                                <ContainerOption>
                                   {ask.option.map((op, i) =>(
                                    <Option onClick={() => handlePregunta(i)} key={i}>{op}</Option>
                                   ))}
                                </ContainerOption>
                            </div>
                            ) : ''
                        ))
                     )
                    
                   }
                    <Cerrar onClick={() => setActiveJ(state => !state)}>
                        <span> Cerrar</span>
                    </Cerrar>
                </ContainerPreguntas>
            </ModalContent>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`
const Title = styled.h3`
    text-align: center;
    margin: 10px 0 15px;
`

const ContainerPreguntas = styled.div``
const Pregunta = styled.h4`
    color: red;
    margin: 10px 0;
`
const ContainerOption = styled.div``
const Option = styled.p`
    border: 1px solid black;
    padding: 9px;
    margin: 4px 0;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    :hover{
        background-color: #2a58ec;
        color: white;
    }
`

const Cerrar = styled.div`
    text-align: center;
    width: 100%;
    margin: 15px 0 10px;
    span{
        background-color: red;
        padding: 10px;
        border-radius: 12px;
        cursor: pointer;

}
`

export default Modal