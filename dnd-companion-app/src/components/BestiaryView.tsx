import React, { useState } from 'react';
import { Tab } from '../stores/tabStore';
import MonsterList from './MonsterList';
import MonsterDetail from './MonsterDetail';

interface BestiaryViewProps {
  activeTab: Tab;
}

const BestiaryView: React.FC<BestiaryViewProps> = ({ activeTab }) => {
  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      <div className="col-span-4 h-full">
        <MonsterList onSelectMonster={setSelectedMonsterId} />
      </div>
      <div className="col-span-8 h-full">
        <MonsterDetail monsterId={selectedMonsterId} />
      </div>
    </div>
  );
};

export default BestiaryView;
