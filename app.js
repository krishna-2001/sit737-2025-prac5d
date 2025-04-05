const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("SIT737 Task 5.2D – Node.js service is running!");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` App running on http://localhost:${PORT}`);
});
