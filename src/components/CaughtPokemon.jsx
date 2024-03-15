import React, { Component } from 'react';

class CaughtPokemon extends Component {
    state = {
        caught: [],
        pokemonNameInput: ""
    };

    handleInputChange = (event) => {
        this.setState({ pokemonNameInput: event.target.value });
    };

    catchPokemon = () => {
        const { pokemonNameInput, caught } = this.state;
        if (pokemonNameInput.trim() === "") return;
        this.setState({
            caught: [...caught, pokemonNameInput],
            pokemonNameInput: ""
        });
    };

    randomPokemon = () => {
        const random = Math.floor(Math.random() * 100) + 1;
        const newPokemon = `Pokemon ${random}`;
        this.setState(prevState => ({
            caught: [...prevState.caught, newPokemon]
        }));
    };

    render() {
        const { pokemonNameInput, caught } = this.state;
        const date = new Date().toLocaleDateString();

        return (
            <div>
                <input
                    type="text"
                    value={ pokemonNameInput }
                    onChange={ this.handleInputChange }
                />
                <button onClick={ this.catchPokemon }>Catch Pokemon</button>
                <p>
                    Caught { caught.length } Pokemon on { date }
                </p>
                <button onClick={ this.randomPokemon }>Random Pokemon</button>
                <ul>
                    { caught.map((pokemon, index) => (
                        <li key={ index }>{ pokemon }</li>
                    )) }
                </ul>
            </div>
        );
    }
}

export default CaughtPokemon;
