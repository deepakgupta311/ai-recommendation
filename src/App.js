import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const products = [
    { name: "iPhone 11", price: 400 },
    { name: "Samsung Galaxy S21", price: 450 },
    { name: "iPhone 14", price: 900 },
    { name: "OnePlus Nord", price: 300 },
    { name: "Google Pixel 7", price: 500 }
  ];

  const getRecommendations = async () => {
    const response = await fetch("http://localhost:5001/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query, products })
    });

    const data = await response.json();
    setRecommendations(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Product Recommendation</h1>

      <input
        type="text"
        placeholder="e.g. phone under $500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={getRecommendations}>Get Recommendations</button>

      <h2>Recommended Products:</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;