import React from 'react';


const ExhibitRoom = ({ roomName, children }) => (
  <div className="exhibit-room">
    <h2 className="room-name">{roomName}</h2>
    <div className="room-content">{children}</div>
  </div>
);

export default ExhibitRoom;
