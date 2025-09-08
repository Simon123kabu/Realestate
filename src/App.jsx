import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './context/AuthContext'; 

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar /> 
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </AuthProvider>
  );
}

export default App;