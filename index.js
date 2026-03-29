const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Your app is live!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});