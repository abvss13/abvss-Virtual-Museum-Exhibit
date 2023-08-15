// ExhibitRoom.js
import React from 'react';

const ExhibitRoom = ({ roomName, children }) => (
  <div className="exhibit-room">
    <h2>{roomName}</h2>
    {children}
  </div>
);

export default ExhibitRoom;
