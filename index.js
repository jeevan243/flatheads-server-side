const express = require("express");
const connect = require("./src/config/db");
require("dotenv").config();
const productsContrller = require("./src/controllers/product.controller");


const Port1 = process.env.Port || 1234;
const app = express();
app.use(express.json());
app.use("/products", productsContrller);





app.listen(Port1, async (req, res) => {
  try {
    connect();
    console.log(`Connected to the ${Port1}`);
  } catch (error) {
    console.log(error.message);
  }
});
