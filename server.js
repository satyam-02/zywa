const connectToMongo = require("./db");
const express = require("express");

const cors = require("cors");

connectToMongo();
const app = express();

app.use(cors());

app.use(express.json());

// const dotenv=require("dotenv").config();

const port = process.env.PORT || 5000;

app.use("/", require("./routes/statusRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
