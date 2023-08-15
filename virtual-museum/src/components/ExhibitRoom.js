import React from 'react';

const ExhibitRoom = ({ roomName, children }) => (
  <div className="exhibit-room">
    <h2>{roomName}</h2>
    <div className="exhibit-room-content">{children}</div>
  </div>
);

export default ExhibitRoom;
