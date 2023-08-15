// FigureProfile.js
import React from 'react';

const FigureProfile = ({ figure }) => (
  <div className="figure-profile">
    <h3>{figure.name}</h3>
    <img src={figure.img_url} alt={figure.name} />
    <p>{figure.description}</p>
    {/* Display accomplishments or other details here */}
  </div>
);

export default FigureProfile;
