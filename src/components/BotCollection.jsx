import React, { useEffect, useState } from 'react';

function BotCollection({ bots, onAddBot }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {bots.map((bot) => (
          <div
            key={bot.id}
            onClick={() => onAddBot(bot)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              cursor: 'pointer',
              width: '200px',
            }}
          >
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
    </div>
  );
}

export default BotCollection;
