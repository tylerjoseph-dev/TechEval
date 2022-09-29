/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const products = require("./00-products.json");

exports.seed = async function(knex) {
  return knex.raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("products").insert(products);
    })
};
