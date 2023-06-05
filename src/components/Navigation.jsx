import styled from "styled-components";

//icon
import SearchIcon from '@mui/icons-material/Search';
import usePokemon from "../hooks/usePokemon";
import {  useNavigate} from "react-router-dom";

const Navigation = () => {
	const navigate = useNavigate()
	const {setVisibleFilter, keywords, reset, handleInputChange} = usePokemon()

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate(`/search/${keywords}`);
		reset();
	};

	return (
		<Container>
			<form onSubmit={onSearchSubmit}>
				<FormGroup >
					<Button type="submit">
						<SearchIcon />
					</Button>
					<input
						type='search'
						name='keywords'
						id=''
						value={keywords}
						onChange={handleInputChange}
						placeholder='Buscar nombre de pokemon'
					/>
				</FormGroup>
			</form>

				<FilterContainer onClick={() => setVisibleFilter(state => !state)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
						/>
					</svg>
					<span>Filtrar</span>
				</FilterContainer>
		</Container>
	);
}


const Container = styled.div`
	margin: 0 auto;

	@media only screen and (min-width: 768px) {
		max-width: 600px;
    }

`
const FormGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	background-color: transparent;
	margin: 20px 10px 10px;
	border: 1px solid #555;
	height: 50px;
	border-radius: 25px;

	input{
		font-family: inherit;
		width: 100%;
		border: none;
		outline: none;
		font-size: 15px;
		background-color: transparent;
	}
`

const Button = styled.button`
	cursor: pointer;
 	margin-right: 12px;
	outline: none;
    border: none;
	background-color: #006d77;
	border-radius: 25px 0 0 25px;
	height: 50px;
	width: 60px;
	transition: .5s all ease;
	:hover{
		background-color: #83c5be;
	}
	svg{
		font-size: 25px;
		color: #fff;

  }

`

const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
  	justify-content: center;
	margin: 20px 0 10px;
	
	cursor: pointer;
	svg{
		width: 30px;
		height: 30px;
		stroke: #555;
	}
`




export default Navigation