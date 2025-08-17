import React from 'react';
import Tab from './Tab';
import useTabStore from '../stores/tabStore';

const TabBar: React.FC = () => {
  const { tabs, activeTabId, setActiveTab, addTab, closeTab } = useTabStore();

  return (
    <div className="flex items-center bg-primary shadow-lg border-b-2 border-brand-charcoal" style={{ minHeight: '40px' }}>
      <div className="flex items-center px-1 space-x-1">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            title={tab.title}
            isActive={tab.id === activeTabId}
            onSelect={() => setActiveTab(tab.id)}
            onClose={() => closeTab(tab.id)}
          />
        ))}
      </div>
      <button onClick={() => addTab('journal')} className="ml-2 p-1 text-brand-off-white hover:bg-brand-brown-light rounded">
        {/* Plus Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

export default TabBar;
