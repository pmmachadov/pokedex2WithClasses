import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BestPokemon from './components/BestPokemon';
import CaughtPokemon from './components/CaughtPokemon';
import Logo from './components/Logo';
import PokemonCity from './components/PokemonCity';
import PokemonMoves from './components/PokemonMoves';
import PokemonInfo from './components/PokemonInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Logo />
        <nav>
          <Link to="/best-pokemon">Best Pokemon</Link> | { ' ' }
          <Link to="/caught-pokemon">Caught Pokemon</Link> | { ' ' }
          <Link to="/pokemon/pikachu">Pikachu Info</Link>
        </nav>
        <Routes>
          <Route path="/best-pokemon" element={ <BestPokemon /> } />
          <Route path="/caught-pokemon" element={ <CaughtPokemon /> } />
          <Route path="/pokemon/:name" element={ <PokemonInfo /> } />
        </Routes>
        <PokemonCity />
        <PokemonMoves />
      </BrowserRouter>
    </div>
  );
}

export default App;
