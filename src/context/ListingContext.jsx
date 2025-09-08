// src/context/ListingContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { seedProperties } from '../data/seed'; // Import mock data

const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Load mock data initially
    setListings(seedProperties);
  }, []);

  const addListing = (newListing) => {
    const id = listings.length + 1; // Simple ID generation for mock purposes
    setListings([...listings, { id, ...newListing }]);
  };

  const updateListing = (id, updatedListing) => {
    setListings(
      listings.map((listing) =>
        listing.id === id ? { ...listing, ...updatedListing } : listing
      )
    );
  };

  const deleteListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  const getListingById = (id) => {
    return listings.find((listing) => listing.id === parseInt(id));
  };

  return (
    <ListingContext.Provider
      value={{
        listings,
        addListing,
        updateListing,
        deleteListing,
        getListingById,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

export default ListingContext;