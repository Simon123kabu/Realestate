import React, { useState } from 'react';

const ContactButtons = ({ property }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${property.title} at ${property.address}`
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! An agent will contact you shortly.');
    setShowContactForm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-[#36454F] mb-4">Contact About This Property</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col items-center p-4 border border-[#C7EEFF] rounded-lg">
          <div className="w-12 h-12 bg-[#C7EEFF] rounded-full flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-[#36454F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <p className="text-sm text-center text-[#36454F]">Call Agent</p>
          <a href={`tel:${property.agent.phone}`} className="font-semibold text-[#36454F] mt-1">
            {property.agent.phone}
          </a>
        </div>

        <div className="flex flex-col items-center p-4 border border-[#C7EEFF] rounded-lg">
          <div className="w-12 h-12 bg-[#C7EEFF] rounded-full flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-[#36454F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm text-center text-[#36454F]">Email Agent</p>
          <a href={`mailto:${property.agent.email}`} className="font-semibold text-[#36454F] mt-1 truncate">
            {property.agent.email}
          </a>
        </div>
      </div>

      <button
        onClick={() => setShowContactForm(true)}
        className="w-full bg-[#36454F] text-[#FAF9F6] py-3 rounded-md font-semibold hover:bg-[#2C3E50] transition-colors mb-4"
      >
        Schedule a Tour
      </button>

      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#36454F]">Contact Agent</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#36454F] mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7EEFF] focus:border-[#C7EEFF]"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#36454F] mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7EEFF] focus:border-[#C7EEFF]"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#36454F] mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7EEFF] focus:border-[#C7EEFF]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#36454F] mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7EEFF] focus:border-[#C7EEFF]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#36454F] text-[#FAF9F6] py-3 rounded-md font-semibold hover:bg-[#2C3E50] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactButtons;