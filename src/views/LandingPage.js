import React, { useState, useEffect } from "react";
import { getProducts } from "../Api/api";
import '../Styles/LandingPage.css'

export function LandingPage() {
  const [productsInfo, setProductsInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts()
      .then((data) => {
        setProductsInfo(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  // Funktion för att gruppera produkter efter kategori
  const groupProductsByCategory = () => {
    const groupedProducts = {};

    productsInfo.forEach((product) => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }

      groupedProducts[product.category].push(product);
    });

    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory();

  return (
    <div>
      <figure id="homefigure">
        <h1 id="headerh1">Products</h1>
      </figure>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : Object.keys(groupedProducts).length > 0 ? (
          Object.keys(groupedProducts).map((category) => (
            <div key={category} className="category-container">
              <h2>{category}</h2>
              <ul className="product-list">
                {groupedProducts[category].map((product) => (
                  <li key={product.id} className="product-list-item">
                    <div className="product-box">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <p>Price: {product.price || "N/A"}</p>
                      <p>Rating: {product.rating || "N/A"}</p>
                      <p>Stock: {product.stock || "N/A"}</p>
                      <img src={product.thumbnail} alt={`${product.title} thumbnail`} />
                      <p>Discount: {product.discountPercentage || "N/A"}%</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}


export default LandingPage;
