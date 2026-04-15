const express = require("express");
const cors = require("cors");

const app = express();
app.use(
    cors({
      origin: "https://ai-recommendation-kk1u.vercel.app",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"]
    })
  );
app.use(express.json());

app.post("/recommend", (req, res) => {
  const { query, products } = req.body;

  let filtered = [];

  if (query.includes("500")) {
    filtered = products.filter(p => p.price <= 500);
  } else if (query.includes("300")) {
    filtered = products.filter(p => p.price <= 300);
  } else {
    filtered = products;
  }

  res.json(filtered);
});

app.listen(5001, () => console.log("Server running on port 5001"));