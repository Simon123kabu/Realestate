import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#36454F] to-[#2C3E50] text-[#FAF9F6] py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-lg md:text-xl mb-8">Search thousands of properties for sale and rent in your area.</p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter city, neighborhood, or ZIP code"
                  className="flex-grow px-4 py-3 rounded-md text-[#36454F] focus:outline-none focus:ring-2 focus:ring-[#C7EEFF]"
                />
                <button
                  type="submit"
                  className="bg-[#C7EEFF] text-[#36454F] px-6 py-3 rounded-md font-semibold hover:bg-[#B0E0E6]"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-16 bg-[#FAF9F6]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#36454F]">Featured Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400x250?text=Property+1" alt="Property 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#36454F]">Cozy Family Home</h3>
                  <p className="text-gray-600 mb-4">123 Main St, Anytown, USA</p>
                  <p className="text-[#36454F] font-bold text-lg">$450,000</p>
                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <span>3 Beds</span>
                    <span>2 Baths</span>
                    <span>1,800 sqft</span>
                  </div>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400x250?text=Property+2" alt="Property 2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#36454F]">Modern Apartment</h3>
                  <p className="text-gray-600 mb-4">456 Elm St, Cityville, USA</p>
                  <p className="text-[#36454F] font-bold text-lg">$320,000</p>
                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <span>2 Beds</span>
                    <span>1 Bath</span>
                    <span>1,200 sqft</span>
                  </div>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400x250?text=Property+3" alt="Property 3" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#36454F]">Luxury Villa</h3>
                  <p className="text-gray-600 mb-4">789 Oak Ave, Luxetown, USA</p>
                  <p className="text-[#36454F] font-bold text-lg">$1,200,000</p>
                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <span>5 Beds</span>
                    <span>4 Baths</span>
                    <span>4,500 sqft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-[#FAF9F6]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://via.placeholder.com/600x400?text=About+Us" alt="About Us" className="rounded-lg shadow-md" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#36454F]">About RealEstate</h2>
                <p className="text-gray-600 mb-6">
                  We are a leading real estate agency dedicated to helping you find the perfect property. With years of experience and a team of expert agents, we make buying, selling, and renting seamless and stress-free.
                </p>
                <a href="/about" className="bg-[#36454F] text-[#FAF9F6] px-6 py-3 rounded-md font-semibold hover:bg-[#2C3E50]">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default HomePage;