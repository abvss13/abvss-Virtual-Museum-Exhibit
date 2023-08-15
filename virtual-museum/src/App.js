import React, { useEffect, useState } from 'react';
import ExhibitRoom from './components/ExhibitRoom';
import FigureProfile from './components/FigureProfile';
import InteractiveElements from './components/InteractiveElements'; // Import InteractiveElements
import ArtifactDisplay from './components/ArtifactDisplay'; // Import ArtifactDisplay
import SearchAndFilter from './components/SearchAndFilter'; // Import SearchAndFilter
import EducationalContent from './components/EducationalContent'; // Import EducationalContent
import Quiz from './components/Quiz'; // Import Quiz
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
            <InteractiveElements /> {/* Add InteractiveElements component */}
            <ArtifactDisplay /> {/* Add ArtifactDisplay component */}
            <SearchAndFilter /> {/* Add SearchAndFilter component */}
            <EducationalContent /> {/* Add EducationalContent component */}
            <Quiz /> {/* Add Quiz component */}
          </ExhibitRoom>
        ))}
      </header>
    </div>
  );
}

export default App;
