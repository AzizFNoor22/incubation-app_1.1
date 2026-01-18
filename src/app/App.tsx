import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Participants } from './components/Participants';
import { Learning } from './components/Learning';
import { Financing } from './components/Financing';
import { ImpactReports } from './components/ImpactReports';
import { Settings } from './components/Settings';
import { SettingsProvider, useSettings } from './context/SettingsContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const { profile, appearance } = useSettings();

  const renderContent = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Participants':
        return <Participants />;
      case 'Learning':
        return <Learning />;
      case 'Financing':
        return <Financing />;
      case 'Reports':
        return <ImpactReports />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'Dashboard':
        return 'Entrepreneurship Incubation Dashboard';
      case 'Participants':
        return 'Participants Management';
      case 'Learning':
        return 'Learning Management System';
      case 'Financing':
        return 'Financing & Loan Management';
      case 'Reports':
        return 'Impact Reports & Analytics';
      case 'Settings':
        return 'Settings & Configuration';
      default:
        return 'Entrepreneurship Incubation Dashboard';
    }
  };

  const getDensityClass = () => {
    switch (appearance.density) {
      case 'compact':
        return 'density-compact';
      case 'spacious':
        return 'density-spacious';
      default:
        return 'density-comfortable';
    }
  };

  const getSidebarClass = () => {
    switch (appearance.sidebarDisplay) {
      case 'collapsed':
        return 'sidebar-collapsed';
      case 'auto-hide':
        return 'sidebar-auto-hide';
      default:
        return '';
    }
  };

  return (
    <div className={`flex h-screen bg-gray-50 ${getDensityClass()} ${getSidebarClass()}`}>
      <Sidebar activeItem={currentPage} onNavigate={setCurrentPage} collapsed={appearance.sidebarDisplay === 'collapsed'} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName={profile.fullName} userRole={profile.role} title={getPageTitle()} />
        
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}