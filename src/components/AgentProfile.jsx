import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const AgentProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Agent Profile</h3>
      <div className="flex items-center mb-4">
        <img
          src={user.profileImage || 'https://via.placeholder.com/150'}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-medium text-gray-800">{user.firstName} {user.lastName}</h4>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-600">{user.phone}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{user.bio || 'Experienced real estate agent specializing in residential properties.'}</p>
      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
        Contact Agent
      </button>
    </div>
  );
};

export default AgentProfile;