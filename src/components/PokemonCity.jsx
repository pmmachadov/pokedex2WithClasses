import React, { useState } from "react";

const PokemonCity = () => {
    const [city, setCity] = useState("");

    const updateCity = (event) => {
        console.log(event.target.value);
        setCity(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={ city }
                onChange={ updateCity }
            />
            <p>Welcome to the city of <h1>{ city }</h1></p>
        </div>
    );
};

export default PokemonCity;
