import React from 'react';

export default function Pokemon({
  image,
  name,
  description,
  price,
  totalHandler,
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
        <button onClick={() => totalHandler(price)}>Add</button>
      </div>
    </div>
  );
}
