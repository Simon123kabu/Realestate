import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLoginClick = () => setShowLogin(true);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 transform transition-all duration-500 ease-out ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-20 items-center">
            {/* Brand (acts as Home) */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-white font-extrabold text-2xl tracking-wide"
              >
                <span className="transition-transform duration-300 group-hover:scale-105">RealEstate</span>
                <span className="block h-1 w-1 rounded-full bg-white/70 opacity-70 group-hover:opacity-100 transition" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-lg">
              <Link
                to="/"
                className="relative text-slate-200 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
              <Link
                to="/listings"
                className="relative text-slate-200 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Listings
              </Link>
              <button
                onClick={handleLoginClick}
                className="relative text-slate-200 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Login/Register
              </button>
              <Link
                to="/dashboard"
                className="relative text-slate-200 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Dashboard
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="inline-flex items-center justify-center p-3 rounded-xl text-slate-200 hover:text-white hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition"
              >
                {!isOpen ? (
                  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden origin-top bg-slate-800/95 shadow-lg transition-all duration-300 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="px-4 pt-3 pb-4 space-y-2">
            <Link to="/" className="block text-slate-200 hover:text-white hover:bg-slate-700/60 px-3 py-2 rounded-md text-lg">
              Home
            </Link>
            <Link to="/listings" className="block text-slate-200 hover:text-white hover:bg-slate-700/60 px-3 py-2 rounded-md text-lg">
              Listings
            </Link>
            <button
              onClick={handleLoginClick}
              className="block w-full text-left text-slate-200 hover:text-white hover:bg-slate-700/60 px-3 py-2 rounded-md text-lg"
            >
              Login/Register
            </button>
            <Link to="/dashboard" className="block text-slate-200 hover:text-white hover:bg-slate-700/60 px-3 py-2 rounded-md text-lg">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Modals (outside of nav so they overlay correctly) */}
      <LoginPage
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      <RegisterPage
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    </>
  );
};

export default Navbar;
