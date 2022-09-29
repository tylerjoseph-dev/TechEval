/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path = require("path");
require("dotenv").config();
const {DATABASE_URL} = process.env;

module.exports = {

  development: {
    client: 'postgresql',
    pool: {min: 1, max: 5},
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "database", "seeds"),
    }
  },
};
