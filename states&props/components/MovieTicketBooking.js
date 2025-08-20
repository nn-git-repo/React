import React, { useState } from "react";
import './Appss.css'
const SeatSelector = ({ seat, toggleSeat }) => {
  return (
    <button 
      className={seat.selected ? "selected" : ""}
      onClick={() => toggleSeat(seat.id)}
    >
      {seat.id}
    </button>
  );
};

const MovieBookingApp = () => {
  const [seats, setSeats] = useState(
    Array.from({ length: 10 }, (_, i) => ({ id: i + 1, selected: false }))
  );
  const [confirmed, setConfirmed] = useState(false);

  const toggleSeat = (id) => {
    setSeats(seats.map(seat =>
      seat.id === id ? { ...seat, selected: !seat.selected } : seat
    ));
  };

  const selectedSeats = seats.filter(seat => seat.selected);
  const total = selectedSeats.length * 200; // 200 per seat

  return (
    <div>
      <h1>Movie Ticket Booking</h1>
      <div className="seats">
        {seats.map(seat => (
          <SeatSelector key={seat.id} seat={seat} toggleSeat={toggleSeat} />
        ))}
      </div>
      <h3>Selected Seats: {selectedSeats.map(s => s.id).join(", ")}</h3>
      <h3>Total: ₹{total}</h3>
      <button onClick={() => setConfirmed(true)}>Confirm Booking</button>
      {confirmed && <h2>Booking Confirmed ✅</h2>}
    </div>
  );
};

export default MovieBookingApp;
