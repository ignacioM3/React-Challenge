import React from 'react'
import styled from 'styled-components'

const Ganador = () => {
  return (
    <Container>
        <Title>Felicidades! Has Conseguido a Mewtwo</Title>
        <img src="/images/150.png" alt="" />
    </Container>
  )
}

const Container = styled.div`
    text-align: center;

    img{
        width: 150px;
        height: 150px;
    }
`
const Title = styled.h3`
    color: #15c415;
`

export default Ganador