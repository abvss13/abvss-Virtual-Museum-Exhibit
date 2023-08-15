import React from 'react';
import HistoricalFigureList from './HistoricalFigureList'; // Correct relative path
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Somali Historical Figures Encyclopedia</h1>
      </header>
      <main>
        <HistoricalFigureList />
      </main>
    </div>
  );
}

export default App;
