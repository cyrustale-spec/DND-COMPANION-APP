import React, { useEffect, useState } from 'react';
import useTabStore, { Tab } from '../stores/tabStore';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface JournalViewProps {
  activeTab: Tab;
}

const JournalView: React.FC<JournalViewProps> = ({ activeTab }) => {
  const { updateTabContent, tabs } = useTabStore();
  const [text, setText] = useState(activeTab.content);

  useEffect(() => {
    // Find the latest content from the store when the tab changes
    const currentTabInStore = tabs.find(t => t.id === activeTab.id);
    if (currentTabInStore) {
      setText(currentTabInStore.content);
    }
  }, [activeTab, tabs]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    // This could be debounced in a real application for performance
    updateTabContent(activeTab.id, e.target.value);
  };

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {/* Markdown Editor */}
      <textarea
        value={text}
        onChange={handleTextChange}
        className="w-full h-full bg-brand-cream text-brand-charcoal p-4 rounded-md border border-brand-brown-dark focus:ring-2 focus:ring-accent-gold focus:outline-none font-mono resize-none"
        placeholder="Start writing your journal entry here..."
      />
      {/* Markdown Preview */}
      <div className="prose prose-invert bg-brand-charcoal p-4 rounded-md h-full overflow-y-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default JournalView;
