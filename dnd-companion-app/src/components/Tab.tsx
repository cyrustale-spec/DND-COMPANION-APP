import React from 'react';

interface TabProps {
  title: string;
  isActive: boolean;
  onSelect: () => void;
  onClose: () => void;
}

const Tab: React.FC<TabProps> = ({ title, isActive, onSelect, onClose }) => {
  const activeClasses = 'bg-brand-brown-dark border-accent-gold';
  const inactiveClasses = 'bg-brand-charcoal opacity-60 hover:opacity-100 border-transparent';

  return (
    <div
      className={`flex items-center px-4 py-1.5 text-sm rounded-t-md cursor-pointer border-b-2 transition-all duration-150 ease-in-out group relative`}
      onClick={onSelect}
    >
      <span className={`transition-colors ${isActive ? 'text-accent-gold' : 'text-brand-off-white'}`}>{title}</span>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent onSelect from firing when closing
          onClose();
        }}
        className="ml-3 text-brand-off-white opacity-50 group-hover:opacity-100 hover:bg-primary rounded-full p-0.5 transition-opacity"
      >
        {/* Close icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default Tab;
