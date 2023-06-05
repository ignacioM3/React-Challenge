import React, { useEffect } from 'react'
import usePokemon from '../hooks/usePokemon'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import CardPokemon from '../components/CardPokemon';
import Loader from '../components/Loader';

const Search = () => {
    const { searchPokemon, searchResult, loading } = usePokemon();
    const params = useParams()
    const { name } = params

    useEffect(() => {
        searchPokemon(name)
    }, []);


    return (
        <Container>
            <Title>Resultados de la busqueda: {name}</Title>
            <Row>
                {loading ? <Loader /> : 
                searchResult.length > 0 ? (
                    searchResult.map(pokemon => (
                        <CardPokemon pokemon={pokemon} key={pokemon.id} />
                    ))
                ): (
                    <ContainerImg>
                        <Title2>Lo sentimos no hay resultados para tu busqueda. Sigue en tu busqueda Pokemon</Title2>
                        <img src="/images/pika.webp" alt="pika" />
                    </ContainerImg>
                )}

            </Row>
        </Container>
    )
}
const Container = styled.div`
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


const ContainerImg = styled.div`
    text-align: center;

    img{
    width: 300px;
    height: 200px;
    }
`

const Title2 = styled.h3`
    margin: 15px 0;
`
export default Search