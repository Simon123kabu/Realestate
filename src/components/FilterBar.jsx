import React from 'react';

const FilterBar = ({ filters, onFilterChange, onSortChange, sortBy }) => {
  const handleInputChange = (e) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-full md:w-auto">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleInputChange}
          className="px-3 py-2 rounded border"
        />
  {/* Min Price and Max Price fields removed */}
        <select
          name="beds"
          value={filters.beds}
          onChange={handleInputChange}
          className="px-3 py-2 rounded border"
        >
          <option value="">Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <select
          name="baths"
          value={filters.baths}
          onChange={handleInputChange}
          className="px-3 py-2 rounded border"
        >
          <option value="">Baths</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <select
          name="propertyType"
          value={filters.propertyType}
          onChange={handleInputChange}
          className="px-3 py-2 rounded border"
        >
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-sm mb-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 rounded border"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      <button
        onClick={() => onFilterChange({ location: '', beds: '', baths: '', propertyType: '' })}
        className="mt-4 w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;