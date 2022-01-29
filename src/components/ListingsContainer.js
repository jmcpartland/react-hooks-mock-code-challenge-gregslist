import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  const showListings = listings.map((listing) => <ListingCard key={listing.id} listing={listing} onDeleteClick={handleDeleteClick} />)

  function handleDeleteClick(id) {
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`,{
      "method": "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      const updatedListings = listings.filter((item) => item.id !== id)
      setListings(updatedListings)
    })
  }

  return (
    <main>
      <ul className="cards">
        { showListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
