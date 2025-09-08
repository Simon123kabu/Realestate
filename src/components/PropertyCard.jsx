// src/components/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, viewMode }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        viewMode === 'list' ? 'flex flex-row' : ''
      }`}
    >
      <img
        src={property.image}
        alt={property.title}
        className={`${viewMode === 'list' ? 'w-1/3 h-48 object-cover' : 'w-full h-48 object-cover'}`}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.address}</p>
        <p className="text-indigo-600 font-bold text-lg mb-4">${property.price.toLocaleString()}</p>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{property.beds} Bedrooms</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} sqft</span>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          {property.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <span className="inline-block px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-semibold">
          {property.status}
        </span>
        <div className="mt-4 flex space-x-4">
          <Link 
            to={`/property/${property.id}`}
            className="bg-[#36454F] text-[#f9faf6] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#2C3E50] transition-colors inline-block"
          >
            View Details
          </Link>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;