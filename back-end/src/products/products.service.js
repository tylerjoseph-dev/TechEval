const knex = require("../database/connection");

async function create(product){
    return knex("products")
        .insert(product)
        .returning("*").then((createdProduct) => createdProduct[0]);
}

async function read(product_id){
    return knex("products")
        .select("*")
        .where({product_id})
        .first();
}

async function update(product, product_id){
    return knex("products")
        .select("*")
        .where({product_id})
        .update(product, "*");
}

async function destroy(product_id){
    return knex("products")
        .where({product_id})
        .del();
}

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