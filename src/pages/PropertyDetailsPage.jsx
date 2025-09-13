import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactButtons from '../components/ContactButtons';
import MapEmbed from '../components/MapEmbed';
import AgentProfile from '../components/AgentProfile';

// Mock data (aligned with PostPropertyPage and DashboardPage)
const mockProperties = [
  {
    id: 1,
    images: [
      'https://via.placeholder.com/800x500?text=Property+Main',
      'https://via.placeholder.com/800x500?text=Living+Room',
      'https://via.placeholder.com/800x500?text=Kitchen',
      'https://via.placeholder.com/800x500?text=Bedroom',
      'https://via.placeholder.com/800x500?text=Bathroom',
    ],
    title: 'Modern Downtown Apartment',
    address: '123 Main St, Anytown, USA',
    price: 320000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    yearBuilt: 2018,
    propertyType: 'Apartment',
    status: 'For Sale',
    description:
      'This stunning modern apartment in the heart of downtown offers luxury living with high-end finishes throughout. The open concept living area features floor-to-ceiling windows with panoramic city views. The gourmet kitchen includes stainless steel appliances, quartz countertops, and a spacious island. The master suite boasts a walk-in closet and spa-like bathroom with dual vanities and a soaking tub. Building amenities include 24-hour concierge, fitness center, and rooftop terrace.',
    features: [
      'Floor-to-Ceiling Windows',
      'Hardwood Floors',
      'Central Air Conditioning',
      'In-Unit Laundry',
      'Balcony',
      'Smart Home Technology',
      'Stainless Steel Appliances',
      'Quartz Countertops',
      'Walk-In Closets',
      'Concierge Service',
    ],
    agent: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah@realestate.com',
      phone: '(555) 123-4567',
      bio: 'Experienced real estate agent specializing in residential properties.',
      profileImage: 'https://via.placeholder.com/100x100?text=Agent',
    },
    openHouse: {
      date: '2023-06-15',
      time: '1:00 PM - 4:00 PM',
    },
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
    },
  },
  {
    id: 2,
    images: ['https://via.placeholder.com/800x500?text=Property+2'],
    title: 'Cozy Family Home',
    address: '456 Elm St, Cityville, USA',
    price: 450000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    yearBuilt: 2015,
    propertyType: 'House',
    status: 'New Listing',
    description: 'A charming family home with a spacious backyard and modern amenities.',
    features: ['Updated Kitchen', 'Backyard', 'Garage'],
    agent: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah@realestate.com',
      phone: '(555) 123-4567',
      bio: 'Experienced real estate agent specializing in residential properties.',
      profileImage: 'https://via.placeholder.com/100x100?text=Agent',
    },
    openHouse: {
      date: '2023-06-20',
      time: '2:00 PM - 5:00 PM',
    },
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
    },
  },
];

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock fetch; in production, use API call
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      setError('Invalid property ID');
      return;
    }
    const foundProperty = mockProperties.find((prop) => prop.id === parsedId);
    if (!foundProperty) {
      setError(`Property with ID ${parsedId} not found`);
    } else {
      setProperty(foundProperty);
      setError(null);
    }
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAF9F6]">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-lg text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-[#FAF9F6]">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-lg">Loading property...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-[#36454F]">
            Home
          </a>{' '}
          &gt;{' '}
          <a href="/listings" className="hover:text-[#36454F]">
            Listings
          </a>{' '}
          &gt; <span className="text-[#36454F]">{property.title}</span>
        </nav>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative h-96 rounded-lg overflow-hidden mb-4">
            <img
              src={property.images[activeImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-[#36454F] text-[#FAF9F6] px-3 py-1 rounded-md">
              {activeImage + 1} / {property.images.length}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {property.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`h-20 rounded-md overflow-hidden ${activeImage === index ? 'ring-2 ring-[#C7EEFF]' : ''}`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-2xl font-bold text-[#36454F] mb-2">{property.title}</h1>
              <p className="text-gray-600 mb-4 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {property.address}
              </p>

              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-[#36454F]">${property.price.toLocaleString()}</span>
                <span className="ml-4 px-2 py-1 bg-[#C7EEFF] text-[#36454F] rounded-md text-sm font-semibold">
                  {property.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 py-4 border-t border-b border-gray-200">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#36454F] mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-sm font-medium text-[#36454F]">{property.beds} Beds</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#36454F] mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-[#36454F]">{property.baths} Baths</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#36454F] mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                    />
                  </svg>
                  <span className="text-sm font-medium text-[#36454F]">{property.sqft.toLocaleString()} sqft</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#36454F] mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-[#36454F]">Built in {property.yearBuilt}</span>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-[#36454F] mb-4">Property Details</h2>
              <p className="text-gray-600 mb-6">{property.description}</p>

              <h3 className="text-lg font-semibold text-[#36454F] mb-3">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#C7EEFF] mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <MapEmbed
              address={property.address}
              latitude={property.location.latitude}
              longitude={property.location.longitude}
            />
          </div>

          {/* Sidebar */}
          <div>
            <ContactButtons property={property} />

            {/* Agent Info */}
            <AgentProfile />

            {/* Open House Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-semibold text-[#36454F] mb-4">Open House</h3>
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-[#36454F] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">{property.openHouse.date}</span>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 text-[#36454F] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">{property.openHouse.time}</span>
              </div>
              <button className="w-full bg-[#C7EEFF] text-[#36454F] py-2 rounded-md text-sm font-semibold hover:bg-[#B0E0E6] transition-colors">
                Add to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;