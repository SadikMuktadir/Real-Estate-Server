const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

// middleware
app.use(cors());
app.use(express.json());

// API call
app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
