import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (loginField, password) => {
    // Mock login logic; in production, replace with API call
    const mockUser = {
      email: loginField,
      firstName: 'Agent',
      lastName: 'Smith',
      phone: '123-456-7890',
      bio: 'Experienced real estate agent specializing in residential properties.',
      profileImage: 'https://via.placeholder.com/150',
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = (formData) => {
    // Mock registration logic; in production, replace with API call
    const newUser = { ...formData };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;