import React from 'react';


const ArtifactDisplay = ({ artifacts }) => (
  <div className="artifact-display">
    <h4>Artifacts:</h4>
    <div className="artifact-list">
      {/* Map over artifacts and display them */}
      {artifacts.map((artifact, index) => (
        <div className="artifact-item" key={index}>
          <img src={artifact.img_url} alt={`Artifact ${index + 1}`} />
          <p>{artifact.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ArtifactDisplay;
