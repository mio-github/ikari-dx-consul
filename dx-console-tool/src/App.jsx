import React, { useState } from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  TrendingUp,
  AlertTriangle,
  FileText,
  Calendar,
  Users,
  Settings,
  BarChart3,
  Target
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import ProjectTimeline from './components/ProjectTimeline';
import KPIMonitor from './components/KPIMonitor';
import RiskManagement from './components/RiskManagement';
import Documents from './components/Documents';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'ダッシュボード', icon: LayoutDashboard },
    { id: 'timeline', label: 'プロジェクト進行', icon: Calendar },
    { id: 'kpi', label: 'KPI監視', icon: Target },
    { id: 'risk', label: 'リスク管理', icon: AlertTriangle },
    { id: 'documents', label: 'ドキュメント', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'timeline':
        return <ProjectTimeline />;
      case 'kpi':
        return <KPIMonitor />;
      case 'risk':
        return <RiskManagement />;
      case 'documents':
        return <Documents />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <BarChart3 size={32} />
            <div>
              <h1>DXコンサル支援ツール</h1>
              <p>イカリ消毒株式会社様</p>
            </div>
          </div>
          <div className="header-info">
            <div className="project-info">
              <span className="label">プロジェクト期間</span>
              <span className="value">2025年11月 〜 2026年1月</span>
            </div>
            <div className="project-info">
              <span className="label">担当</span>
              <span className="value">株式会社ミオシステム</span>
            </div>
          </div>
        </div>
      </header>

      <div className="app-container">
        <aside className="sidebar">
          <nav className="nav-menu">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
