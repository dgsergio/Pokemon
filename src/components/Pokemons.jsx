import React, { useState } from 'react';
import Pokemon from './Pokemon';

export default function Pokemons({ pokemonList }) {
  const [total, setTotal] = useState({ amount: 0, price: 0, msg: '' });
  const totalHandler = (price) => {
    if (total.price + price >= 999) {
      setTotal((pv) => ({
        ...pv,
        msg: 'Tu limite de compra es $1000',
      }));
      return;
    }
    if (total.amount > 9) {
      setTotal((pv) => ({
        ...pv,
        msg: 'No puedes comprar más de 10 items',
      }));
      return;
    }
    setTotal((pv) => ({
      amount: pv.amount + 1,
      price: pv.price + price,
      msg: '',
    }));
  };

  return (
    <main>
      <div className="cards">
        {pokemonList.map((poke) => (
          <Pokemon
            totalHandler={totalHandler}
            key={poke.id}
            image={poke.image}
            name={poke.name}
            description={poke.description}
            price={poke.price}
          />
        ))}
      </div>
      <div className="cart-btn">
        {total.msg && <div className="message error">{total.msg}</div>}
        <button
          title="Clic para vaciar items"
          onClick={() => setTotal({ amount: 0, price: 0, msg: '' })}
        >
          {total.amount} items - ${total.price}
        </button>
      </div>
    </main>
  );
}
