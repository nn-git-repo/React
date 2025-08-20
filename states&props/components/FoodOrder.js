import React, { useState } from "react";
import './Appss.css'
const FoodCard = ({ item, addToCart }) => {
  return (
    <div className="food-card">
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

const FoodOrderApp = () => {
  const menu = [
    { id: 1, name: "Pizza", price: 200 },
    { id: 2, name: "Burger", price: 100 },
    { id: 3, name: "Pasta", price: 150 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Online Food Ordering</h1>
      <div>
        {menu.map((item) => (
          <FoodCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default FoodOrderApp;
