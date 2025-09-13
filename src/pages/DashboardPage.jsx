import React, { useState, useContext } from 'react';
import PropertyCard from '../components/PropertyCard';
import PostPropertyPage from './PostPropertyPage';
import AgentProfile from '../components/AgentProfile';
import AuthContext from '../context/AuthContext';

const mockAgentProperties = [
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
    agent: {
      firstName: 'Agent',
      lastName: 'Smith',
      email: 'agent@example.com',
      phone: '123-456-7890',
      bio: 'Experienced real estate agent specializing in residential properties.',
      profileImage: 'https://via.placeholder.com/150',
    },
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
    agent: {
      firstName: 'Agent',
      lastName: 'Smith',
      email: 'agent@example.com',
      phone: '123-456-7890',
      bio: 'Experienced real estate agent specializing in residential properties.',
      profileImage: 'https://via.placeholder.com/150',
    },
  },
];

const DashboardPage = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const { user } = useContext(AuthContext);
  const [agentProperties, setAgentProperties] = useState(mockAgentProperties);

  const handleAddProperty = (newProperty) => {
    const propertyWithAgent = {
      ...newProperty,
      agent: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        profileImage: user.profileImage,
      },
    };
    setAgentProperties([
      ...agentProperties,
      { id: agentProperties.length + 1, ...propertyWithAgent },
    ]);
    setShowPostModal(false);
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 md:px-6 lg:px-8 py-8 mt-20">
        <h1 className="text-3xl font-bold text-center mb-8">Agent Dashboard</h1>

        {/* Agent Profile Card - Centered */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-full max-w-md flex flex-col items-center bg-white rounded-xl shadow-lg p-8 mb-6">
            <img
              src={user?.profileImage || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-200 shadow mb-4"
            />
            <h2 className="text-2xl font-semibold mb-1">{user?.firstName} {user?.lastName}</h2>
            <p className="text-gray-500 mb-2">{user?.email}</p>
            <p className="text-gray-500 mb-2">{user?.phone}</p>
            <p className="text-gray-700 text-center mb-4">{user?.bio || 'No bio provided.'}</p>
            <button
              className="bg-indigo-500 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-600 transition-colors mb-2"
              // onClick={() => ...} // Add manage profile logic if needed
            >
              Manage Profile
            </button>
          </div>
          <button
            onClick={() => setShowPostModal(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors shadow"
          >
            Add New Property
          </button>
        </div>

        {/* Properties List */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Properties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentProperties.length > 0 ? (
              agentProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} viewMode="grid" />
              ))
            ) : (
              <p className="text-center col-span-full text-lg">
                No properties listed yet. Add one to get started!
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Post Property Modal */}
      <PostPropertyPage
        isOpen={showPostModal}
        onClose={() => setShowPostModal(false)}
        onAddProperty={handleAddProperty}
      />
    </div>
  );
};

export default DashboardPage;
