const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// set view engine to ejs
// it means that all of our views are going to be written in ejs
app.set("view engine", "ejs");

// database connection
const dbURI = "mongodb://localhost/switzerlandappdb";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("home");
});
