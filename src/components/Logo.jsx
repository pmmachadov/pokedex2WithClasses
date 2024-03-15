import { Component } from "react";

class Logo extends Component {

    appName = "Pokedex";

    logWhenClicked = () => {
        console.log("You clicked the logo");
    }

    render() {
        return (
            <div>
                <header>
                    <h1>{ this.appName }</h1>
                    <button type="button" onClick={ this.logWhenClicked }>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon" />
                    </button>

                </header>
            </div>
        );
    }
}

export default Logo
