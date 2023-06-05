import React, { useEffect, useState } from 'react'
import CardPokemon from '../components/CardPokemon'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import OptionFilters from '../components/OptionFilters'
import usePokemon from '../hooks/usePokemon'
import Loader from '../components/Loader'



const Home = () => {
  const { allPokemons, filteredPokemons, loading, visibleFilter,setOffset, offset, eliminar } = usePokemon();

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      setOffset(offset + 50)
    }
  }
  window.addEventListener('scroll', handleScroll);



  return (
    <CardContainer>
      <Title>Pokedex</Title>

      <Navigation />
      {visibleFilter && <OptionFilters />}

      <Row>
        {/* Evitar renderizacion en blanco */}
        {loading ? (
				<Loader />
			) : (
				<>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
                	<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</>
			)}

      </Row>
    </CardContainer>

  )
}



const CardContainer = styled.div`
   width: 100%;
    margin: 0 auto;
    max-width: 800px;

    @media only screen and (min-width: 1024px) {
      max-width: 1200px;
    }

    @media only screen and (min-width: 1200px) {
      max-width: 1100px;
    }
`

const Row = styled.div`
   display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
`

export default Home