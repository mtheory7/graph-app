import React from 'react';
import { PieChart } from 'react-chartkick';
import 'chart.js';
import './App.css';

function calcValue(amount) {
  return amount
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PieChart label="Mass" data={[["Gold", 16.38], ["Silver", 715.37], ["Platinum", 4.35]]} colors={['#D4AF37', '#e5e4e2', '#C0C0C0']}/>
      </header>
    </div>
  );
}

export default App;
