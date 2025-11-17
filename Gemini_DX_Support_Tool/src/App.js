// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Documents from './components/Documents';
import Interviews from './components/Interviews';
import Analysis from './components/Analysis';
import Roadmap from './components/Roadmap';

function App() {
  const [activeView, setActiveView] = useState('Dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Documents':
        return <Documents />;
      case 'Interviews':
        return <Interviews />;
      case 'Analysis':
        return <Analysis />;
      case 'Roadmap':
        return <Roadmap />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
