// src/utils/format.js
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
};

export const formatSqft = (sqft) => {
  return `${sqft.toLocaleString('en-US')} sqft`;
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatTime = (timeString) => {
  // Assuming timeString is like '1:00 PM - 4:00 PM'
  return timeString;
};

export const formatLocation = (address) => {
  // Basic formatting; could be enhanced with geolocation parsing if needed
  return address;
};