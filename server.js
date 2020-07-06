const express = require("express");
const app = express();

//// Dotenv: read .env vars into Node (process.env)
require("dotenv").config();

//// Production build
const path = require("path");

if (process.env.NODE_ENV !== "development") {
  // Serve static files from the React frontend app
  app.use("/", express.static(path.join(__dirname, "build")));

  // Catch all -- anything that doesn't match the above, send back index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
