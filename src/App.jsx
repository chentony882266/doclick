import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingScreen from './components/LandingScreen';
import BusinessPage from './components/BusinessPage';
import TalentPage from './components/TalentPage';
import './App.css';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import JobSearch from './pages/job/JobSearch';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="antialiased">
      <Routes>
        <Route path="/" element={<LandingScreen onSelect={(role) => navigate(`/${role}`)} />
        } />
        <Route path="/business" element={<BusinessPage onBack={() => navigate('/')} />} />
        <Route path="/talent" element={<TalentPage onBack={() => navigate('/')} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<JobSearch />} />
      </Routes>
    </div>
  );
};

export default App;
