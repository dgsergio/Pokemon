import React, { useEffect, useState } from 'react';
import Pokemons from './Pokemons';
import api from '../mocks/api';

export default function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [apiStatus, setApiStatus] = useState({ loading: false, error: '' });

  useEffect(() => {
    setApiStatus({ loading: true, error: '' });
    api
      .list()
      .then((res) => {
        return setPokemonList(res);
      })
      .catch(() =>
        setApiStatus({ loading: false, error: 'Something went wrong' })
      )
      .finally(() => setApiStatus((pv) => ({ ...pv, loading: false })));
  }, []);

  return (
    <>
      <header>
        <h1>Pokemons to buy</h1>
      </header>

      {apiStatus.loading && <div className="message">Loading...</div>}
      {!apiStatus.loading && apiStatus.error && (
        <div className="message error">{apiStatus.error}</div>
      )}
      {pokemonList && <Pokemons pokemonList={pokemonList} />}
    </>
  );
}
