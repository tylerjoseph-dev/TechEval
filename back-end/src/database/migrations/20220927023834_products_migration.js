/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("product_id").primary();
    table.string("product_title").notNullable(); 
    table.string("product_description").notNullable();
    table.string("product_image").notNullable();
    table.decimal("product_price", 8, 2).notNullable();
    table.integer("product_likes").notNullable().defaultTo(0);
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("products");
};
