// Importing express
const express = require("express");

// Cross-Origin requests import
const cors = require("cors");

// Error Handling Imports
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// Route Import
const productsRouter = require("./products/products.router");

const app = express();

// Cors import for Cross Origin Requests
app.use(cors());
// express.json import for parsing json requests.
app.use(express.json());

// Express Router for /products - Promotes Single Responsibility.
app.use("/products", productsRouter);

// Error handler implementations
app.use(notFound);
app.use(errorHandler);

module.exports = app;