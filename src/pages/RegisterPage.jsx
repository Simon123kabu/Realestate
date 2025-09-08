import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

const RegisterPage = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const { register } = useContext(AuthContext);

  // Create & cleanup preview URL for uploaded image
  useEffect(() => {
    if (!profileImageFile) {
      setProfileImagePreview(null);
      return;
    }
    const url = URL.createObjectURL(profileImageFile);
    setProfileImagePreview(url);
    return () => {
      URL.revokeObjectURL(url);
      setProfileImagePreview(null);
    };
  }, [profileImageFile]);

  // Close on Esc
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }

    const formData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      bio: bio.trim(),
      // keep a preview URL for UI purposes; backend should accept file upload separately
      profileImage: profileImagePreview || 'https://via.placeholder.com/150',
    };

    // Call your context register function (adjust if your register expects different shape)
    register(formData);

    // reset minimal state or just close
    onClose();
  };

  // nothing to render when modal is closed
  if (!isOpen) return null;

  // backdrop click close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="register-title"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold p-2 focus:outline-none"
          aria-label="Close register modal"
        >
          &times;
        </button>

        <div className="p-6">
          <h2 id="register-title" className="text-2xl font-bold mb-4 text-center text-gray-800">Register for RealEstate</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                rows="4"
                placeholder="Tell us about yourself (e.g., experience, specialties)"
                required
              />
            </div>

            <div>
              <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
              <div className="flex items-center gap-4">
                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProfileImageFile(e.target.files ? e.target.files[0] : null)}
                  className="px-2 py-1 border rounded-md"
                />
                {profileImagePreview && (
                  <img
                    src={profileImagePreview}
                    alt="Profile preview"
                    className="w-20 h-20 rounded-full object-cover border"
                  />
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="acceptTerms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                I accept the <a href="#" className="text-indigo-600 hover:underline">terms and conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
            >
              Register
            </button>
          </form>

          <div className="text-center text-sm mt-4">
            <p className="text-gray-600">Or register with</p>
            <div className="flex justify-center space-x-3 mt-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Google</button>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Apple</button>
            </div>
          </div>

          <p className="text-sm text-center mt-5 text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => {
                onClose();
                // small timeout to ensure modal is closed before opening the other
                setTimeout(() => onSwitchToLogin && onSwitchToLogin(), 50);
              }}
              className="text-indigo-600 hover:underline font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
