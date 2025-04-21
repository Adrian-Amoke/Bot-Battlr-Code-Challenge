import React from 'react';

function YourBotArmy({ armyBots, onReleaseBot, onDischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {armyBots.length === 0 ? (
        <p>No bots enlisted yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {armyBots.map((bot) => (
            <div
              key={bot.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                width: '200px',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => onReleaseBot(bot)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDischargeBot(bot);
                }}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
                aria-label={`Discharge ${bot.name}`}
              >
                x
              </button>
              <img src={bot.avatar_url} alt={bot.name} style={{ width: '100%' }} />
              <h3>{bot.name}</h3>
              <p>{bot.catchphrase}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
