import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const processedProducts = products
    .map((product) => ({
      ...product,
      price: product.price * 0.2,
    }))
    .filter((product) => product.rating && product.rating.rate > 4.0);


function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Rating: {product.rating && product.rating.rate}</p>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

  return (
    <div className="app">
      <h1>FakeStore  Products</h1>
      <ProductList products={processedProducts} />
    </div>
  );
}

export default App;
