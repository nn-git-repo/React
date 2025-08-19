import React from 'react'
import "./ClothStore.css";
const ClothStore = () => {

const products = [
    {
      productId: 101,
      productName: "T-Shirt",
      description: "Cotton material",
      price: 499,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      productId: 102,
      productName: "Jeans",
      description: "Slim fit denim",
      price: 1299,
      sizes: ["M", "L", "XL"]
    },
    {
      productId: 103,
      productName: "Jacket",
      description: "Winter collection",
      price: 2499,
      sizes: ["L", "XL"]
    }
  ];





  return (
    <div className="cloth-container">
       <h2 className="title">🛍 Cloth Store Listing</h2>

      {/* Check if products exist */}
      {products.length > 0 ? (
        <table className="cloth-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price (₹)</th>
              <th>Available Sizes</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.productId}>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.description}</td>
                <td className="price">₹{item.price}</td>
                <td>{item.sizes.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Products Available</p>
      )} 






    </div>
  )
}

export default ClothStore