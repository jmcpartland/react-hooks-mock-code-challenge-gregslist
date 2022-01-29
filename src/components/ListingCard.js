import React, { useState } from "react";

function ListingCard({ listing, onDeleteClick }) {
  const [favorite, setFavorite] = useState(false);

  function handleDeleteClick() {
    onDeleteClick(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ listing.image } alt={ listing.description } />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
