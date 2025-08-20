import React, { useState } from "react";
import './Appss.css'
function MovieBookingApp() {
  const [seats, setSeats] = useState(
    Array.from({ length: 10 }, (_, i) => ({ id: i + 1, selected: false }))
  );

  const toggleSeat = (id) => {
    setSeats(
      seats.map((s) =>
        s.id === id ? { ...s, selected: !s.selected } : s
      )
    );
  };

  return (
    <div>
      <h2>Movie Booking App</h2>
      <div className="seats">
        {seats.map((seat) => (
          <button
            key={seat.id}
            className={seat.selected ? "selected" : ""}
            onClick={() => toggleSeat(seat.id)}
          >
            {seat.id}
          </button>
        ))}
      </div>
      <h3>Selected Seats: {seats.filter((s) => s.selected).map((s) => s.id).join(", ")}</h3>
    </div>
  );
}

export default MovieBookingApp;
