import { useEffect, useState } from "react";

function PokemonMoves() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
                const data = await res.json();
                console.log(data);
                setPokemonData(data);
            } catch (error) {
                console.error("Failed to fetch Pokemon data:", error);
            }
        };

        fetchData();
    }, []);

    return pokemonData ? (
        <div>
            <p>{ pokemonData.name }'s moves:</p>
            <ul>
                { pokemonData.moves.map((move) => (
                    <li key={ move.move.name }>{ move.move.name }</li>
                )) }
            </ul>
        </div>
    ) : null;
}

export default PokemonMoves;
