import React from 'react';

const MapEmbed = ({ address, latitude, longitude }) => {
  // In a real application, you would use the Google Maps API or similar
  // For demonstration, we're using a static map image
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C${encodeURIComponent(address)}&key=YOUR_API_KEY`;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-[#36454F] mb-4">Location</h3>
      <div className="h-64 bg-gray-200 rounded-md overflow-hidden">
        {/* In a real app, you would use an interactive map component */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#C7EEFF] to-[#B0E0E6]">
          <div className="text-center">
            <svg className="w-12 h-12 text-[#36454F] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-[#36454F] font-semibold">Interactive Map</p>
            <p className="text-sm text-gray-600 mt-1">Would display here with API integration</p>
            <p className="text-xs text-gray-500 mt-2">Coordinates: {latitude}, {longitude}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 flex items-center">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {address}
      </p>
    </div>
  );
};

export default MapEmbed;