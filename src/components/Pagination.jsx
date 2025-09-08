import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5;
  
  // Calculate the range of pages to show
  const getPageNumbers = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    // Adjust if we're near the end
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md text-sm font-semibold ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-[#36454F] text-[#FAF9F6] hover:bg-[#2C3E50] transition-colors'
        }`}
      >
        Previous
      </button>

      {/* First Page */}
      {!pageNumbers.includes(1) && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-3 py-2 rounded-md text-sm font-semibold ${
              currentPage === 1
                ? 'bg-[#36454F] text-[#FAF9F6]'
                : 'bg-white text-[#36454F] hover:bg-gray-100'
            }`}
          >
            1
          </button>
          {!pageNumbers.includes(2) && <span className="px-2 text-gray-500">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-md text-sm font-semibold ${
            currentPage === page
              ? 'bg-[#36454F] text-[#FAF9F6]'
              : 'bg-white text-[#36454F] hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {!pageNumbers.includes(totalPages) && (
        <>
          {!pageNumbers.includes(totalPages - 1) && <span className="px-2 text-gray-500">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-2 rounded-md text-sm font-semibold ${
              currentPage === totalPages
                ? 'bg-[#36454F] text-[#FAF9F6]'
                : 'bg-white text-[#36454F] hover:bg-gray-100'
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md text-sm font-semibold ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-[#36454F] text-[#FAF9F6] hover:bg-[#2C3E50] transition-colors'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;