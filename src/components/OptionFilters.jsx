import styled from "styled-components"
import typesFilter from "../../typesFilter.js"
import usePokemon from "../hooks/usePokemon.jsx"

const OptionFilters = () => {

    const { handleCheckbox } = usePokemon()

    return (
            <Container>
            <FiltersType>
                {
                    typesFilter.map((type, index) => (
                        <InputContainer key={index}> 
                            <input
                                type='checkbox'
                                name={type.attribute}
                                id={type.attribute}
                                onChange={handleCheckbox}
                            />
                            <label htmlFor={type.attribute}>{type.name}</label>
                        </InputContainer>
                    ))
                }


             </FiltersType>

        </Container>

    )
}
const Container = styled.div`
    padding: 8px;
	color: #555;
	background-color: #f2f2f27a;
    text-align: center;
`

const FiltersType = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
	gap: 20px;

  
`
const InputContainer = styled.div`
    width: 80px;
    font-size: 16px;
    input{
        margin-right: 4px;
    }
`

export default OptionFilters