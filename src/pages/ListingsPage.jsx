import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import PropertyCard from '../components/PropertyCard';
import Pagination from '../components/Pagination';

const mockProperties = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x250?text=Property+1',
    title: 'Cozy Family Home',
    address: '123 Main St, Anytown, USA',
    price: 450000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    features: ['Updated Kitchen', 'Backyard', 'Garage'],
    status: 'New Listing',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x250?text=Property+2',
    title: 'Modern Apartment',
    address: '456 Elm St, Cityville, USA',
    price: 320000,
    beds: 2,
    baths: 1,
    sqft: 1200,
    features: ['City View', 'Gym Access', 'Balcony'],
    status: 'Price Reduced',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/400x250?text=Property+3',
    title: 'Luxury Villa',
    address: '789 Oak Ave, Luxetown, USA',
    price: 1200000,
    beds: 5,
    baths: 4,
    sqft: 4500,
    features: ['Pool', 'Home Theater', 'Ocean View'],
    status: 'Under Contract',
  },
  ...Array.from({ length: 12 }, (_, i) => ({
    id: i + 4,
    image: `https://via.placeholder.com/400x250?text=Property+${i + 4}`,
    title: `Property ${i + 4}`,
    address: `${i + 100} Sample St, City, USA`,
    price: 250000 + i * 50000,
    beds: Math.floor(Math.random() * 4) + 1,
    baths: Math.floor(Math.random() * 3) + 1,
    sqft: 1000 + i * 200,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    status: ['For Sale', 'Sold', 'Pending'][i % 3],
  })),
];

const ITEMS_PER_PAGE = 6;

const ListingsPage = () => {
  const [allProperties] = useState(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: '',
    propertyType: '',
  });
  const [sortBy, setSortBy] = useState('price-asc');
  const [viewMode, setViewMode] = useState('grid');

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProperties = filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    applyFiltersAndSort(allProperties, newFilters, sortBy);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
    applyFiltersAndSort(filteredProperties, filters, newSort);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const applyFiltersAndSort = (props, filts, sort) => {
    let filtered = props.filter((prop) => {
      return (
        (!filts.location ||
          prop.address.toLowerCase().includes(filts.location.toLowerCase()) ||
          prop.title.toLowerCase().includes(filts.location.toLowerCase())) &&
        (!filts.minPrice || prop.price >= parseInt(filts.minPrice || 0)) &&
        (!filts.maxPrice || prop.price <= parseInt(filts.maxPrice || Number.MAX_SAFE_INTEGER)) &&
        (!filts.beds || prop.beds === parseInt(filts.beds)) &&
        (!filts.baths || prop.baths === parseInt(filts.baths)) &&
        (!filts.propertyType || prop.title.toLowerCase().includes(filts.propertyType.toLowerCase()))
      );
    });

    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'newest') {
      filtered.sort((a, b) => b.id - a.id);
    }

    setFilteredProperties(filtered);
  };

  useEffect(() => {
    applyFiltersAndSort(allProperties, filters, sortBy);
  }, [allProperties, filters, sortBy]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Added mt-20 to clear fixed navbar */}
      <main className="flex-grow container mx-auto px-4 md:px-6 lg:px-8 py-8 mt-20">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#36454F]">Property Listings</h1>
          <p className="text-center text-gray-600">
            Showing {filteredProperties.length} properties
          </p>
        </section>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            sortBy={sortBy}
          />
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'grid'
                  ? 'bg-[#36454F] text-[#FAF9F6]'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'list'
                  ? 'bg-[#36454F] text-[#FAF9F6]'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {viewMode === 'map' ? (
          <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg">
            <p className="text-xl text-gray-600">Interactive Map View</p>
          </div>
        ) : (
          <>
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {currentProperties.length > 0 ? (
                currentProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} viewMode={viewMode} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-600">
                    No properties found. Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>

            {filteredProperties.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ListingsPage;
