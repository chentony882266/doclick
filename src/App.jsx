import React, { useState, useEffect } from 'react';
import LandingScreen from './components/LandingScreen';
import BusinessPage from './components/BusinessPage';
import TalentPage from './components/TalentPage';
import './App.css';

const App = () => {
  const [view, setView] = useState('home'); // home, business, talent

  // Handle browser back button
  useEffect(() => {
    const handlePopState = (event) => {
      // Very basic routing handling
      if (event.state && event.state.view) {
        setView(event.state.view);
      } else {
        setView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (newView) => {
    window.history.pushState({ view: newView }, '', `#${newView}`);
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="antialiased">
      {view === 'home' && <LandingScreen onSelect={navigateTo} />}
      {view === 'business' && <BusinessPage onBack={() => navigateTo('home')} />}
      {view === 'talent' && <TalentPage onBack={() => navigateTo('home')} />}
    </div>
  );
};

export default App;
