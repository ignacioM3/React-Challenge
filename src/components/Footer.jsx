import styled from '@emotion/styled'
import React from 'react'
import usePokemon from '../hooks/usePokemon'

const Footer = () => {
  const {setActiveJ} = usePokemon()
  return (
    <Container onClick={() => setActiveJ(state => !state)}>
      <img src="/images/pokebola.png" alt="" />
    </Container>
    
  )
}

const Container = styled.div`
 position: fixed;
 left: -10px;
 bottom: -25px;
cursor: pointer;

 img{
  width: 80px;
  height:80px;
 }

`

export default Footer