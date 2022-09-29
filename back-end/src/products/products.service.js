const knex = require("../database/connection");
// Inserts product to database, returning the newly created product.
async function create(product){
    return knex("products")
        .insert(product)
        .returning("*").then((createdProduct) => createdProduct[0]);
}
// Retrieves a representation of the desired product by product_id
async function read(product_id){
    return knex("products")
        .select("*")
        .where({product_id})
        .first();
}
// Updates an existing product. Takes in the updated object as param1. product_id as param2.
async function update(product, product_id){
    return knex("products")
        .select("*")
        .where({product_id})
        .update(product, "*");
}
// Deletes an existing product off the database by product_id.
async function destroy(product_id){
    return knex("products")
        .where({product_id})
        .del();
}
// Returns a list of all products in the database.
async function list(){
    return knex("products")
        .select("*");
}



module.exports = {
    create,
    read,
    update,
    destroy,
    list,
}