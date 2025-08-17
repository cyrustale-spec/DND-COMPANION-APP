import React, { useState } from 'react';

const monsters = [
  { id: '1', name: 'Goblin', cr: '1/4' },
  { id: '2', name: 'Orc', cr: '1/2' },
  { id: '3', name: 'Ogre', cr: '2' },
  { id: '4', name: 'Dragon, Young Red', cr: '10' },
  { id: '5', name: 'Lich', cr: '21' },
];

interface MonsterListProps {
  onSelectMonster: (id: string) => void;
}

const MonsterList: React.FC<MonsterListProps> = ({ onSelectMonster }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMonsters = monsters.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col bg-brand-charcoal p-2 rounded-md h-full">
      <input
        type="text"
        placeholder="Search monsters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-brand-rich-black p-2 rounded-md mb-2 border border-brand-brown-dark focus:ring-accent-gold focus:outline-none"
      />
      <ul className="flex-grow overflow-y-auto">
        {filteredMonsters.map(monster => (
          <li
            key={monster.id}
            onClick={() => onSelectMonster(monster.id)}
            className="p-2 hover:bg-brand-brown-dark rounded-md cursor-pointer flex justify-between"
          >
            <span>{monster.name}</span>
            <span className="text-gray-400">CR {monster.cr}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonsterList;
