import { useState, useEffect } from 'react'
import './App.css'
import BotCollection from './components/BotCollection'
import YourBotArmy from './components/YourBotArmy'

function App() {
  const [bots, setBots] = useState([])
  const [armyBots, setArmyBots] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error))
  }, [])

  const addBotToArmy = (bot) => {
    if (!armyBots.find((b) => b.id === bot.id)) {
      setArmyBots([...armyBots, bot])
    }
  }

  const releaseBotFromArmy = (bot) => {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id))
  }

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setArmyBots(armyBots.filter((b) => b.id !== bot.id))
          setBots(bots.filter((b) => b.id !== bot.id))
        } else {
          console.error('Failed to discharge bot')
        }
      })
      .catch((error) => console.error('Error discharging bot:', error))
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} onAddBot={addBotToArmy} />
      <YourBotArmy
        armyBots={armyBots}
        onReleaseBot={releaseBotFromArmy}
        onDischargeBot={dischargeBot}
      />
    </div>
  )
}

export default App
