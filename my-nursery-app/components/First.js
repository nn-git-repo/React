import React from 'react'
import './First.css';

const First = () => {
  return (
    <div className='container'>

 <h2>Creating the Nursery Page</h2>
      <p>Welcome to the nursery landing page! </p>

      <label htmlFor="location">Choose your location: </label>
      <select id="location" className="dropdown">
        <option value="chennai">Chennai</option>
        <option value="bangalore">Bangalore</option>
        <option value="mumbai">Mumbai</option>
        <option value="delhi">Delhi</option>
      </select>

      <h3>Our Flowers</h3>
      <ul className="flower-list">
        <li>Rose</li>
        <li>Lily</li>
        <li>Tulip</li>
        <li>Sunflower</li>
        <li>Jasmine</li>
      </ul>



    </div>
  )
}

export default First