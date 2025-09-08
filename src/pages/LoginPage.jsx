import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [loginField, setLoginField] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginField, password);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close login modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to RealEstate</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="loginField" className="block text-sm font-medium mb-2 text-gray-700">
              Email or Phone Number
            </label>
            <input
              id="loginField"
              type="text"
              value={loginField}
              onChange={(e) => setLoginField(e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter email or phone number"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="text-center text-sm mt-5">
          <p className="text-gray-600">Or login with</p>
          <div className="flex justify-center space-x-4 mt-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Google</button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Apple</button>
          </div>
        </div>
        <p className="text-sm text-center mt-5 text-gray-600">
          Don&apos;t have an account?{' '}
          <button
            onClick={onSwitchToRegister}
            className="text-indigo-600 hover:underline font-medium"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
