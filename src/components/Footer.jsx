import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#36454F] text-[#FAF9F6] pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">PrimeProperties</span>
            </div>
            <p className="text-[#C7EEFF] mb-4">
              Find your dream home with PrimeProperties. We connect buyers with the best properties and agents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#C7EEFF] pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Properties</a></li>
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Agents</a></li>
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#C7EEFF] pb-2">Property Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Apartments</a></li>
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Villas</a></li>
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Commercial</a></li>
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Offices</a></li>
              <li><a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Townhouses</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#C7EEFF] pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#C7EEFF]">123 Property Ave, Real Estate City</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C7EEFF]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C7EEFF]">info@primeproperties.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C7EEFF]">Mon-Fri: 9am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-[#C7EEFF]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
              <p className="text-[#C7EEFF]">Get the latest properties and updates</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-[#2C3E50] text-[#FAF9F6] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#C7EEFF] w-full md:w-64"
              />
              <button className="bg-[#C7EEFF] text-[#36454F] hover:bg-[#B0E0E6] px-4 py-2 rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#C7EEFF] text-center text-[#C7EEFF] text-sm">
          <p>&copy; {new Date().getFullYear()} PrimeProperties. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-[#C7EEFF] hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;