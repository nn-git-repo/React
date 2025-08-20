import React, { useState } from "react";
import './Appss.css'
function HotelBookingApp() {
  const [rooms, setRooms] = useState([
    { id: 1, type: "Deluxe Room", price: 2000, selected: false },
    { id: 2, type: "Suite", price: 3500, selected: false },
    { id: 3, type: "Standard Room", price: 1500, selected: false },
  ]);

  const selectRoom = (id) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, selected: !room.selected } : room
      )
    );
  };

  return (
    <div>
      <h2>Hotel Booking App</h2>
      <div className="card-container">
        {rooms.map((room) => (
          <div className={`card ${room.selected ? "selected" : ""}`} key={room.id}>
            <h3>{room.type}</h3>
            <p>₹{room.price} per night</p>
            <button onClick={() => selectRoom(room.id)}>
              {room.selected ? "Unselect" : "Select Room"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelBookingApp;
