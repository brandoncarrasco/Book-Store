

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  
  res.send({
    token: "kasra",
  });
});

app.listen(3001, () =>
  console.log("API is running on http://localhost:3001/login")
);