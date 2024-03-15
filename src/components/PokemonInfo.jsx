import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PokemonInfo() {
    let { name } = useParams(); // Change this to 'id' if you're using IDs in the URL
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`); // Change ${name} to ${id} for ID usage
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPokemonData(data); // Set the pokemon data state. This means the component will re-render and show the data
                setError(null); // Reset the error state if the fetch is successful
            } catch (error) {
                setError(error.message);
                setPokemonData(null); // Reset the pokemon data in case of an error
            }
        };

        fetchData();
    }, [name]); // Change this dependency to 'id' for ID usage

    if (error) return <div>Error: { error }</div>;
    if (!pokemonData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Pokémon Information</h2>
            <p>Name: { pokemonData.name }</p>
            <p>Color: { pokemonData.color.name }</p>
            <p>Shape: { pokemonData.shape.name }</p>
            <p>Base Happiness: { pokemonData.base_happiness }</p>
            <p>Capture Rate: { pokemonData.capture_rate }</p>
        </div>
    );
}

export default PokemonInfo;
