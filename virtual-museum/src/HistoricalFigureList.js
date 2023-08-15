import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

function HistoricalFigureList() {
  const [historicFigures, setHistoricFigures] = useState([]);
  const [originalFigures, setOriginalFigures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedFigure, setExpandedFigure] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.npoint.io/f3fd7456f67459fc2386') // Provided API endpoint
      .then(response => response.json())
      .then(data => {
        setHistoricFigures(data.historic_figures);
        setOriginalFigures(data.historic_figures); // Store original data for search reset
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const toggleExpansion = index => {
    if (expandedFigure === index) {
      setExpandedFigure(null);
    } else {
      setExpandedFigure(index);
    }
  };

  const handleClose = () => {
    setExpandedFigure(null);
  };

  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFigures = originalFigures.filter(
      figure => figure.name.toLowerCase().includes(searchTerm)
    );
    setHistoricFigures(filteredFigures);
  };

  const handleResetSearch = () => {
    // Reset the search by setting figures back to original data
    setHistoricFigures(originalFigures);
  };

  const handleSortByYear = () => {
    const sortedFigures = [...historicFigures];
    sortedFigures.sort((a, b) => a.birth_year - b.birth_year);
    setHistoricFigures(sortedFigures);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="figure-list">
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name..."
            onChange={handleSearch}
          />
          <button onClick={handleResetSearch}>Reset</button>
        </div>
        <button className="sort-button" onClick={handleSortByYear}>
          Sort by Birth Year
        </button>
      </div>
      {historicFigures.map((figure, index) => (
        <div key={index} className={`figure ${expandedFigure === index ? 'expanded' : ''}`}>
          <img src={figure.img_url} alt={figure.name} />
          <h2>{figure.name}</h2>
          {expandedFigure === index ? (
            <div className="expanded-info">
              <p>{figure.description}</p>
              <div className="accomplishments">
                <h3>Accomplishments:</h3>
                <ul>
                  {figure.accomplishments.map((accomplishment, idx) => (
                    <li key={idx}>{accomplishment}</li>
                  ))}
                </ul>
              </div>
              <button className="close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          ) : (
            <button className="more-info-button" onClick={() => toggleExpansion(index)}>
              More Info
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default HistoricalFigureList;
