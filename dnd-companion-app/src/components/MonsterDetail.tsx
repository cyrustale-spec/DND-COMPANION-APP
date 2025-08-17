import React from 'react';

// This would eventually come from a database or API
const monsterData = {
  name: 'Goblin',
  size: 'Small humanoid (goblinoid)',
  ac: '15 (leather armor, shield)',
  hp: '7 (2d6)',
  speed: '30 ft.',
  stats: { str: '8 (-1)', dex: '14 (+2)', con: '10 (+0)', int: '10 (+0)', wis: '8 (-1)', cha: '8 (-1)' },
  skills: 'Stealth +6',
  senses: 'darkvision 60 ft., passive Perception 9',
  languages: 'Common, Goblin',
  cr: '1/4 (50 XP)',
  abilities: [
    { name: 'Nimble Escape.', text: 'The goblin can take the Disengage or Hide action as a bonus action on each of its turns.' }
  ],
  actions: [
    { name: 'Scimitar.', text: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.' },
    { name: 'Shortbow.', text: 'Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' }
  ]
};

interface MonsterDetailProps {
  monsterId: string | null;
}

const MonsterDetail: React.FC<MonsterDetailProps> = ({ monsterId }) => {
  if (!monsterId) {
    return <div className="p-4 text-center">Select a monster to see its details.</div>;
  }

  // In a real app, we would fetch the monster data based on the ID
  const monster = monsterData;

  return (
    <div className="p-4 bg-brand-cream text-brand-charcoal rounded-md h-full overflow-y-auto">
      <h2 className="text-2xl text-primary font-bold">{monster.name}</h2>
      <p className="text-sm italic">{monster.size}</p>
      <hr className="my-2 border-brand-brown-dark" />
      <p><strong>Armor Class</strong> {monster.ac}</p>
      <p><strong>Hit Points</strong> {monster.hp}</p>
      <p><strong>Speed</strong> {monster.speed}</p>
      <hr className="my-2 border-brand-brown-dark" />
      {/* Stats Table */}
      <div className="grid grid-cols-6 text-center my-2">
        <div><strong>STR</strong><br/>{monster.stats.str}</div>
        <div><strong>DEX</strong><br/>{monster.stats.dex}</div>
        <div><strong>CON</strong><br/>{monster.stats.con}</div>
        <div><strong>INT</strong><br/>{monster.stats.int}</div>
        <div><strong>WIS</strong><br/>{monster.stats.wis}</div>
        <div><strong>CHA</strong><br/>{monster.stats.cha}</div>
      </div>
      <hr className="my-2 border-brand-brown-dark" />
      <p><strong>Skills</strong> {monster.skills}</p>
      <p><strong>Senses</strong> {monster.senses}</p>
      <p><strong>Languages</strong> {monster.languages}</p>
      <p><strong>Challenge</strong> {monster.cr}</p>
      <hr className="my-2 border-brand-brown-dark" />
      {monster.abilities.map(ability => (
        <p key={ability.name}><strong>{ability.name}</strong> {ability.text}</p>
      ))}
      <h3 className="text-xl text-primary font-bold mt-4">Actions</h3>
      <hr className="my-1 border-brand-brown-dark" />
      {monster.actions.map(action => (
        <p key={action.name} className="mt-2"><strong>{action.name}</strong> {action.text}</p>
      ))}
    </div>
  );
};

export default MonsterDetail;
