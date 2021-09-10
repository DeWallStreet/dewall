const express = require("express");
const app = express();
const port = 9000;

app.get("/login", (req, res) => {
  res.send("Logged in");
});

app.listen(port, () => {
  console.log(`Example app runnning at http://localhost:${port}`);
});
