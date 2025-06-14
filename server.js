const express = require("express");
const Calculator = require("./calculator");

const app = express();
const calculator = new Calculator();

app.use(express.json());

app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Both parameters must be numbers" });
  }
  const result = calculator.sum(a, b);
  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
