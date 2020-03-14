import React from 'react';
import Sidebar from './components/Sidebar'
import './App.css';

const items = [
  { name: '<Username>', label: '<Username>' },
  { name: 'Discover Games', label: 'Discover Games' },
  { name: 'Friends', label: 'Friends' }
]

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default App;
