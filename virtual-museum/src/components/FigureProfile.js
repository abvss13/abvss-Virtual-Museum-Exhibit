import React from 'react';


const FigureProfile = ({ figure }) => (
  <div className="figure-profile">
    <h3 className="figure-name">{figure.name}</h3>
    <img className="figure-image" src={figure.img_url} alt={figure.name} />
    <p className="figure-description">{figure.description}</p>
    {/* Display accomplishments or other details here */}
    <div className="figure-accomplishments">
      <h4>Accomplishments:</h4>
      <ul>
        {/* Map over figure's accomplishments and display them */}
        {figure.accomplishments.map((accomplishment, index) => (
          <li key={index}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default FigureProfile;
