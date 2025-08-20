import React, { useState } from "react";
import './Appss.css'
const RoomCard = ({ room, selectRoom }) => (
  <div className={`room-card ${room.selected ? "selected" : ""}`}>
    <h3>{room.type}</h3>
    <p>₹{room.price} per night</p>
    <button onClick={() => selectRoom(room.id)}>
      {room.selected ? "Selected" : "Select Room"}
    </button>
  </div>
);

const HotelBookingApp = () => {
  const [rooms, setRooms] = useState([
    { id: 1, type: "Single", price: 1000, selected: false },
    { id: 2, type: "Double", price: 2000, selected: false },
    { id: 3, type: "Suite", price: 5000, selected: false }
  ]);
  const [nights, setNights] = useState(1);

  const selectRoom = (id) => {
    setRooms(rooms.map(room =>
      room.id === id ? { ...room, selected: !room.selected } : room
    ));
  };

  const selectedRooms = rooms.filter(r => r.selected);
  const total = selectedRooms.reduce((sum, r) => sum + r.price, 0) * nights;

  return (
    <div>
      <h1>Hotel Room Reservation</h1>
      <input 
        type="number" 
        value={nights} 
        onChange={(e) => setNights(Number(e.target.value))}
        min="1"
      />
      <label> Nights</label>
      <div>
        {rooms.map(room => (
          <RoomCard key={room.id} room={room} selectRoom={selectRoom} />
        ))}
      </div>
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default HotelBookingApp;
