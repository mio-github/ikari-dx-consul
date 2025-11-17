// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ activeView, setActiveView }) => {
  const navItems = ['Dashboard', 'Documents', 'Interviews', 'Analysis', 'Roadmap'];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        DX Support
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map(item => (
            <li
              key={item}
              className={activeView === item ? 'active' : ''}
              onClick={() => setActiveView(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
