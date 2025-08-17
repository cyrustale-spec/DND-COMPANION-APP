import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TabBar from './components/TabBar';
import useTabStore, { Tab } from './stores/tabStore';
import JournalView from './components/JournalView';
import BestiaryView from './components/BestiaryView';

const TabContent: React.FC<{ activeTab: Tab }> = ({ activeTab }) => {
  switch (activeTab.type) {
    case 'journal':
      return <JournalView activeTab={activeTab} />;
    case 'bestiary':
      return <BestiaryView activeTab={activeTab} />;
    default:
      return <div>Unsupported tab type</div>;
  }
};

function App() {
  const { activeTabId, tabs } = useTabStore();
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="flex flex-col h-screen bg-brand-rich-black text-brand-off-white font-sans">
      <TabBar />

      {/* Main Content */}
      <div className="flex-grow p-4 h-full">
        {activeTab ? (
          <TabContent activeTab={activeTab} />
        ) : (
          <div>
            <h1 className="text-2xl text-accent-gold">No active tab</h1>
            <p className="text-brand-cream mt-2">Create a new tab to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
