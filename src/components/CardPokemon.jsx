import styled from "styled-components"

import typesFilter from "../../typesFilter";
import DeleteIcon from '@mui/icons-material/Delete';
import usePokemon from "../hooks/usePokemon";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const CardPokemon = ({ pokemon }) => {
    const {deletePokemon} = usePokemon()
    const {front_default: imgPath} = pokemon.sprites.other.dream_world;

    return (
        <Container>
            <DeleteIcon className="delete" onClick={() => deletePokemon(pokemon.id)}/>
            <Top>
                <img src={imgPath} alt={pokemon.id}  />
            </Top>
            <CardInfo>
                <Number>
                    <span>{pokemon.id}</span>
                </Number>
                <Name>
                {pokemon.name}
                <span> {' '}({pokemon.weight}KG)</span>
                </Name>
                <ElementContainer>
                    {
                        //fuerzo dos map para poder ponerlo en español aprovechando el array de filtrado
                        pokemon.types.map((type, index) => (
                            <Element key={index} className={type.type.name} > 
                                {typesFilter.map(types =>(
                                        types.attribute === type.type.name && types.name
                                    ))
                                }
                            </Element>
                        ))
                    }
                </ElementContainer>
                <VerMas>
                    <Title>Habilidades </Title>
                    {
                        pokemon.abilities.map(ab => (
                            <Habilidades><CatchingPokemonIcon />{ab.ability.name}</Habilidades>
                        ))
                    }
                </VerMas>
            </CardInfo>
        </Container>
    )
}

const Container = styled.div`
    background-color: #DC143C;
    border: 3px solid #d6b8b8;
    margin: 25px auto 30px;
    border-radius: 30px;
    width: 260px;
    padding: 20px;
    transition: 1s all ease;
    cursor: pointer;


    :hover{
        transform: translateY(-15px)
    }
`
const Top = styled.div`
    text-align: center;
    position: relative;

    img{
        width: 100%;
        height: 150px;
        border-radius: 10px;
    }
    
`
const CardInfo = styled.div``

const Number = styled.div`
    margin: 20px auto 10px;
    background-color: #97a197;
    width: 70px;
    text-align: center;
    border-radius: 20px;
    span{
        font-weight: 700;
    }

`
const Name = styled.h2`
    text-align: center;
    font-family: 'Times New Roman', Times, serif;

    span{
        font-size: 14px;
        color: #b0b0b0;
    }
`

const ElementContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 10px 0;
`
const Element = styled.div`
    font-size: 18px;
    font-family: serif;
    width: 70px;
    text-align: center;
    color: #ffffff;
    border-radius: 10px;
`

const VerMas = styled.div`
   
`

const Title = styled.h3`
    text-align: center;
`
const Habilidades = styled.h4`
    display: flex;
    align-items: center;
    gap: .5rem;

    color: #fadcdc;

    svg{
        color: black;
    }
`


export default CardPokemon