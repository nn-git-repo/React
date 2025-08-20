import React, { useState } from "react";
import './Appss.css'
function FoodOrderApp() {
  const [cart, setCart] = useState([]);
  const menu = [
    { id: 1, name: "Pizza", price: 250 },
    { id: 2, name: "Burger", price: 120 },
    { id: 3, name: "Pasta", price: 180 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>Food Order App</h2>
      <div className="card-container">
        {menu.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h3>Your Cart:</h3>
      <ul>
        {cart.map((c, i) => (
          <li key={i}>{c.name} - ₹{c.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default FoodOrderApp;
