import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#36454F] to-[#2C3E50] text-[#FAF9F6] py-20 relative overflow-hidden">
          {/* Subtle animation background */}
          <div className="absolute inset-0 opacity-20 animate-pulse"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
              Connect Buyers and Sellers Seamlessly
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
              Our platform bridges agents, companies, and property owners with eager buyers. 
              Agents: Start your journey by listing properties today. Buyers: Browse freely and connect directly—no account needed.
            </p>
            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="/signup"
                className="bg-[#C7EEFF] text-[#36454F] px-6 py-3 rounded-md font-semibold hover:bg-[#B0E0E6] transition-all duration-300 hover:scale-105 animate-fade-in-left"
              >
                Join as Agent
              </a>
              <a
                href="/properties"
                className="border-2 border-[#C7EEFF] text-[#C7EEFF] px-6 py-3 rounded-md font-semibold hover:bg-[#C7EEFF] hover:text-[#36454F] transition-all duration-300 hover:scale-105 animate-fade-in-right delay-400"
              >
                Browse Properties
              </a>
            </div>
          </div>
        </section>

        {/* For Agents Section */}
        <section className="py-16 bg-[#FAF9F6]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#36454F] animate-fade-in">Empower Your Agency</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <h3 className="text-2xl font-semibold mb-6 text-[#36454F]">Start Your Journey as an Agent</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="bg-[#C7EEFF] text-[#36454F] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <p className="text-gray-600">Create a free account and verify your details as an agent, company, or property owner.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="bg-[#C7EEFF] text-[#36454F] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <p className="text-gray-600">Post unlimited properties for sale or rent with photos, details, and pricing.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="bg-[#C7EEFF] text-[#36454F] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <p className="text-gray-600">Receive direct inquiries from buyers and close deals effortlessly.</p>
                  </div>
                </div>
                <a
                  href="/signup"
                  className="bg-[#36454F] text-[#FAF9F6] px-6 py-3 rounded-md font-semibold hover:bg-[#2C3E50] transition-all duration-300"
                >
                  Get Started Today
                </a>
              </div>
              <div className="order-1 lg:order-2 relative">
                {/* Animated Property Showcase */}
                <div className="relative overflow-hidden rounded-lg shadow-md h-96 lg:h-[500px] animate-fade-in-right delay-200">
                  <div className="absolute inset-0">
                    {/* Property 1 */}
                    <img 
                      src="https://pbs.twimg.com/media/G0bCe5QXEAAAtEC.jpg" 
                      alt="Cozy Family Home" 
                      className="w-full h-full object-cover animate-slide-in-left opacity-100" 
                    />
                    {/* Property 2 - Slides in after delay */}
                    <img 
                      src="https://pbs.twimg.com/media/G0AjBVIXcAA3FYc.jpg" 
                      alt="Modern Apartment" 
                      className="w-full h-full object-cover absolute inset-0 animate-slide-in-right opacity-0 delay-3000" 
                    />
                    {/* Property 3 - Slides in after another delay */}
                    <img 
                      src="https://pbs.twimg.com/media/G0vtHjrbwAAaPLe.jpg" 
                      alt="Luxury Villa" 
                      className="w-full h-full object-cover absolute inset-0 animate-slide-in-left opacity-0 delay-6000" 
                    />
                  </div>
                  {/* Overlay Text for Current Property */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-md animate-fade-in-up delay-1000">
                    <h4 className="text-xl font-semibold">Cozy Family Home</h4>
                    <p className="text-sm">$450,000 - 3 Beds, 2 Baths</p>
                  </div>
                </div>
                {/* Additional Static Images for More Visual Space */}
                <div className="grid grid-cols-2 gap-4 mt-6 hidden lg:grid">
                  <img 
                    src="https://pbs.twimg.com/media/G0wHc5lWgAAbv-i.jpg" 
                    alt="Additional Property 4" 
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" 
                  />
                  <img 
                    src="https://pbs.twimg.com/media/G0wHxnoXQAA3Mi-.jpg" 
                    alt="Additional Property 5" 
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Buyers Section - Expanded with More Images */}
        <section className="py-16 bg-[#36454F] text-[#FAF9F6]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Discover Your Perfect Property</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                {/* Main Image with Hover Effect */}
                <img 
                  src="https://pbs.twimg.com/media/G0wHy98XEAAOtMU.jpg" 
                  alt="Property Search" 
                  className="rounded-lg shadow-md w-full h-auto hover:scale-105 transition-transform duration-500" 
                />
                {/* Additional Images Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <img 
                    src="https://pbs.twimg.com/media/G0wHy9tXwAADnbL.jpg" 
                    alt="Explore Listings" 
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" 
                  />
                  <img 
                    src="https://pbs.twimg.com/media/G0v4NxvXwAAOEJO.jpg" 
                    alt="Contact Agent" 
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
              <div className="animate-fade-in-right delay-200">
                <h3 className="text-2xl font-semibold mb-6">Browse and Connect Without Limits</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 p-4 bg-[#2C3E50] rounded-lg hover:bg-[#3a4a5a] transition-all duration-300">
                    <span className="bg-[#C7EEFF] text-[#36454F] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <p className="text-[#FAF9F6]">Explore thousands of listings for sale and rent—no sign-up required.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#2C3E50] rounded-lg hover:bg-[#3a4a5a] transition-all duration-300">
                    <span className="bg-[#C7EEFF] text-[#36454F] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <p className="text-[#FAF9F6]">Filter by location, price, beds, baths, and more to find your match.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#2C3E50] rounded-lg hover:bg-[#3a4a5a] transition-all duration-300">
                    <span className="bg-[#C7EEFF] text-[#36454F] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <p className="text-[#FAF9F6]">Contact agents or owners directly via built-in messaging or phone.</p>
                  </div>
                </div>
                <a
                  href="/properties"
                  className="bg-[#C7EEFF] text-[#36454F] px-6 py-3 rounded-md font-semibold hover:bg-[#B0E0E6] transition-all duration-300"
                >
                  Start Browsing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Gallery Section for More Images */}
        <section className="py-16 bg-[#FAF9F6]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#36454F] animate-fade-in">Property Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <img 
                src="https://pbs.twimg.com/media/G0v5BoXW0AARRQj.jpg" 
                alt="Gallery Property 1" 
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-fade-in-up" 
              />
              <img 
                src="https://pbs.twimg.com/media/G0uBTezX0AEP3yM.jpg" 
                alt="Gallery Property 2" 
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100" 
              />
              <img 
                src="https://pbs.twimg.com/media/G0IoMyNXYAEIdg4.jpg" 
                alt="Gallery Property 3" 
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200" 
              />
              <img 
                src="https://pbs.twimg.com/media/G0Ai5SxXUAAD8VN.jpg" 
                alt="Gallery Property 4" 
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-300" 
              />
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 1s ease-in-out; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-in-out; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-3000 { animation-delay: 3s; }
        .delay-6000 { animation-delay: 6s; }
        /* Cycle animations for property slides */
        .animate-slide-in-left:nth-child(1) { animation-delay: 0s; }
        .animate-slide-in-right { animation-delay: 3s; }
        .animate-slide-in-left:nth-child(3) { animation-delay: 6s; }
        /* Reset and loop */
        img.animate-slide-in-left, img.animate-slide-in-right {
          animation-fill-mode: forwards;
        }
        img.animate-slide-in-right {
          animation: slide-in-right 1s ease-in-out 3s forwards;
        }
        img.animate-slide-in-left:nth-child(3) {
          animation: slide-in-left 1s ease-in-out 6s forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;