import React from 'react';

const FigureProfile = ({ figure }) => (
  <div className="figure-profile">
    <h3 className="figure-profile-name">{figure.name}</h3>
    <img className="figure-profile-image" src={figure.img_url} alt={figure.name} />
    <p className="figure-profile-description">{figure.description}</p>
    {/* Display accomplishments or other details here */}
  </div>
);

export default FigureProfile;
