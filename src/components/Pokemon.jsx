import React from 'react';

export default function Pokemon({
  image,
  name,
  description,
  price,
  totalHandler,
  id,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <h3>
          {name} - ${price}
        </h3>
        <p>{description}</p>
        <button data-testid={id} onClick={() => totalHandler(price)}>
          Add
        </button>
      </div>
    </div>
  );
}
