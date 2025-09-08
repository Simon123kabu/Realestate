import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#36454F] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#36454F] text-[#FAF9F6] px-6 py-3 rounded-md font-semibold hover:bg-[#2C3E50] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;