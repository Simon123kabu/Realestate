import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search by city, neighborhood, ZIP, or keyword"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;