import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class BestPokemon extends Component {
    abilities = [
        'Anticipation',
        'Adaptability',
        'Run-Away'
    ];

    render() {
        return (
            <div>
                <ul>
                    { this.abilities.map((ability) => {
                        const uuid = uuidv4();
                        console.log(uuid);
                        return <li key={ uuid }>{ ability }</li>;
                    }) }
                </ul>
            </div>
        );
    }
}

export default BestPokemon;
