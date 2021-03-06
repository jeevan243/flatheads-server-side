const express = require("express");
const connect = require("./src/config/db");
require("dotenv").config()
const cors = require("cors")

const productsContrller = require("./src/controllers/product.controller");

const Port1 = process.env.PORT || 1234;
const app = express();
app.use(express.json());

app.use(cors())


app.use("/products", productsContrller);

app.get("/", async (req, res) => {
  try {
    return res.send("Server is Live Now");
  } catch (error) {
    return res.send(error.message);
  }
});

app.listen(Port1, async (req, res) => {
  try {
    await connect();
    console.log(`Connected to the ${Port1}`);
  } catch (error) {
    console.log(error.message);
  }
});
