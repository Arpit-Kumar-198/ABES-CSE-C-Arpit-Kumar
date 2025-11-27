const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simple API
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express Backend!" });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
