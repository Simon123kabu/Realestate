import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PostPropertyPage = ({ isOpen, onClose, onAddProperty }) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    images: [],
    title: '',
    address: '',
    price: '',
    beds: '',
    baths: '',
    sqft: '',
    yearBuilt: '',
    propertyType: '',
    status: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const propertyWithAgent = {
      ...formData,
      images: formData.images.map((file) => URL.createObjectURL(file)), // Mock image URLs
      price: parseInt(formData.price),
      beds: parseInt(formData.beds),
      baths: parseInt(formData.baths),
      sqft: parseInt(formData.sqft),
      yearBuilt: parseInt(formData.yearBuilt),
      agent: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        profileImage: user.profileImage,
      },
      openHouse: { date: '', time: '' }, // Placeholder; add form fields if needed
      location: { latitude: 0, longitude: 0 }, // Placeholder; add geolocation logic if needed
    };
    onAddProperty(propertyWithAgent);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Close post property modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="images" className="block text-sm font-medium mb-2 text-gray-700">
              Upload Images
            </label>
            <input
              id="images"
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 border rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="title" className="block text-sm font-medium mb-2 text-gray-700">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="e.g., Modern Downtown Apartment"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="address" className="block text-sm font-medium mb-2 text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="e.g., 123 Main St, Anytown, USA"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="block text-sm font-medium mb-2 text-gray-700">
              Price ($)
            </label>
            <input
              id="price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="e.g., 320000"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label htmlFor="beds" className="block text-sm font-medium mb-2 text-gray-700">
                Bedrooms
              </label>
              <select
                id="beds"
                name="beds"
                value={formData.beds}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              >
                <option value="">Select Bedrooms</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="baths" className="block text-sm font-medium mb-2 text-gray-700">
                Bathrooms
              </label>
              <select
                id="baths"
                name="baths"
                value={formData.baths}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              >
                <option value="">Select Bathrooms</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="sqft" className="block text-sm font-medium mb-2 text-gray-700">
              Square Footage (sqft)
            </label>
            <input
              id="sqft"
              type="number"
              name="sqft"
              value={formData.sqft}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="e.g., 1200"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="yearBuilt" className="block text-sm font-medium mb-2 text-gray-700">
              Year Built
            </label>
            <input
              id="yearBuilt"
              type="number"
              name="yearBuilt"
              value={formData.yearBuilt}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="e.g., 2018"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propertyType" className="block text-sm font-medium mb-2 text-gray-700">
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            >
              <option value="">Select Property Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Land">Land</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="status" className="block text-sm font-medium mb-2 text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            >
              <option value="">Select Status</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
              <option value="Under Contract">Under Contract</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              rows="5"
              placeholder="Describe the property..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostPropertyPage;