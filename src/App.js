import React from 'react';
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import GameCards from './components/GameCards'
import './App.css';
import './components/Sidebar.css'
import './components/Banner.css'
import './components/GameCards.css'


function App() {
  return (
    <div>
      <Banner/>
      <GameCards/>
      <Sidebar/>
    </div>
  )
}

export default App;
