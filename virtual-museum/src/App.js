import React, { useEffect, useState } from 'react';
import ExhibitRoom from './components/ExhibitRoom';
import FigureProfile from './components/FigureProfile';
import fetchData from './FetchData';
import './App.css'; // Import your CSS file here if needed

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      if (fetchedData && fetchedData.historic_figures) {
        setData(fetchedData.historic_figures);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Museum Exhibit</h1>
        {data.map((figure, index) => (
          <ExhibitRoom key={index} roomName={`Exhibit Room ${index + 1}`}>
            <FigureProfile figure={figure} />
            {/* Include other components such as InteractiveElements, ArtifactDisplay, etc. */}
          </ExhibitRoom>
        ))}
      </header>
    </div>
  );
}

export default App;
