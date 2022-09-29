// Importing express
const express = require("express");

// Cross-Origin requests import
const cors = require("cors");

// Error Handling Imports
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// Route Declarations
const productsRouter = require("./products/products.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;