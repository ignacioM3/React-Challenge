import {useState, useEffect, createContext} from 'react';
import useForm from '../hooks/useForm';

const PokemonContext = createContext();

const PokemonProvider = ({children}) => {
    //state
    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [visibleFilter, setVisibleFilter] = useState(false)
    const [filteredPokemons, setfilteredPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
	const [searchResult, setSearchResult] = useState([])



    //custom hooks - useForm
	const [{ keywords }, handleInputChange, reset] = useForm({
        keywords: "",
    })


    //para llamar a los primeros pokemon que vamos a mostrar. Es necesario
	const getAllPokemons = async (limit = 50) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const respuesta = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
		const data = await respuesta.json();
		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const resu = await Promise.all(promises);

		setAllPokemons([...allPokemons, ...resu]);
		setLoading(false);
	};

    //para llamar a todos los pokemones
    const getPokemons = async () =>{
        const baseURL = 'https://pokeapi.co/api/v2/';
        const respuesta = await fetch(`${baseURL}pokemon/?limit=700&offset=0`);

        const data = await respuesta.json();
        
        const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const resu = await Promise.all(promises);
		setGlobalPokemons(resu);
		setLoading(false);
    }

    useEffect(() => {
        getAllPokemons()
    }, [offset]);


    useEffect(() => {
		getPokemons();
	}, []);
	
	

    // State de filtrado
	
	// Filter Function + State
	const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

	const handleCheckbox = e => {
		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});

		if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			setfilteredPokemons([...filteredPokemons, ...filteredResults]);
		} else {
			const filteredResults = filteredPokemons.filter(
				pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredPokemons([...filteredResults]);
		}
	};

	const deletePokemon = id =>{
		const nuevaLista = allPokemons.filter(poke => poke.id !== id)
		const nuevaListaGlobal = globalPokemons.filter(poke => poke.id !== id)
		setAllPokemons([...nuevaLista]);
		setGlobalPokemons([...nuevaListaGlobal]);
		if(filteredPokemons.length > 0){
			const nuevaListaFilter = filteredPokemons.filter(poke => poke.id !== id)
			setfilteredPokemons([...nuevaListaFilter]);
		}
	}

	const searchPokemon = name =>{
		const search = globalPokemons.filter(pokemon =>
			pokemon.name.includes(name))

		setSearchResult([...search])
	}
	//minijuego
	const [activeJ, setActiveJ ] = useState(false)
	const [contador, setContador ] = useState(3)
	const [ganador, setGanador] = useState(false)

    return (
        <PokemonContext.Provider
            value={
                {   
                    loading,
                    setLoading,
                    allPokemons,
                    globalPokemons,
                    //relacionado con filtros
                    visibleFilter,
                    setVisibleFilter,
					keywords,
					handleInputChange,
					reset,
                    handleCheckbox,
                    filteredPokemons,
					setOffset,
					offset,
					deletePokemon,
					activeJ,
					setActiveJ,
					contador,
					setContador,
					ganador, 
					setGanador,
					searchPokemon,
					searchResult
                
                }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export {
    PokemonProvider
}

export default PokemonContext;