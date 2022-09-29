const { default: knex } = require("knex");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const bodyDataHas = require("../utils/bodyDataHas");

const service = require("./products.service");

// CREATE
async function create(request, response) {
    const {
        data: {
            product_title,
            product_description,
            product_image,
            product_price,
            product_likes,

        } = {},
    } = request.body;

    const newProduct = {
        product_title,
        product_description,
        product_image,
        product_price,
        product_likes,
    }

    const resp = await service.create(newProduct);
    response.status(201).json({data: resp })
}

// READ
function read(request, response) {
    response.status(200).json({data: response.locals.product});
}

// UPDATE
async function update(request, response) {
    const updatedProduct = { ...request.body.data };
    await service.update(updatedProduct, response.locals.product_id);
    response.status(200).json({data: updatedProduct});
}

// DELETE
async function destroy(request, response) {
    await service.destroy(request.params.product_id);
    const message = `Successfully Deleted the specified resource`;
    response.status(200).json({data: message});
}

// LIST
async function list(request, response) {
    const list = await service.list();
    response.status(200).json({data: list});
}

// LIKE FUNCTIONS
async function incrementLikes(request, response) {
    const { product_title, product_description, product_image, product_price, product_likes }= await service.read(request.params.product_id);
    const altered = {
        product_title,
        product_description,
        product_image,
        product_price,
        product_likes: product_likes + 1,
    }
    const updated = await service.update(altered, request.params.product_id);
    response.status(200).json({data: updated});

}

async function decrementLikes(request, response) {
    const { product_title, product_description, product_image, product_price, product_likes }= await service.read(request.params.product_id);
    const altered = {
        product_title,
        product_description,
        product_image,
        product_price,
        product_likes: product_likes - 1,
    }
    const updated = await service.update(altered, request.params.product_id);
    response.status(200).json({data: updated});
}

// ROUTER-LEVEL MIDDLEWARE (HELPERS)

function isNumber(request, response, next) {
    const product_id = request.params.product_id;
    
    if(Number.isInteger(parseInt(product_id))){
        response.locals.product_id = product_id;
        return next();
    }
    else{
        return next({
            status: 400,
            message: `/products/${product_id} contains prohibited characters.`
        })
    }
}

async function productExists(request, response, next) {

    const found = await service.read(response.locals.product_id);
    if(found){
        response.locals.product = found;
        return next();
    }
    return next({
        status: 404,
        message: `Product not found with id: ${response.locals.product_id}`,
    })
}

function titleIsValid(request, response, next){
    const { data: {product_title} = {} } = request.body;
    if(product_title.length > 2){
        return next();
    }
    else{
        return next({
            status: 400,
            message: `Title length must be 3 or more characters`
        })
    }
}

function descriptionIsValid(request, response, next) {
    const { data: {product_description} = {}} = request.body;

    if(product_description.length > 20){
        return next();
    }
    else {
        return next({
            status: 400,
            message: `Description length must be 20 or more characters`
        })
    }
}

function priceIsValid(request, response, next){
    const { data: {product_price} = {}} = request.body;

    if(!Number.isNaN(product_price)){
        return next();
    }
    else{
        return next({
            status: 400,
            message: `product_price must be a valid number or decimal.`
        })
    }
}

function likesIsValid(request, response, next) {
    const { data: {product_likes} ={} } = request.body;
    
    if(Number.isInteger(parseInt(product_likes))){
        return next();
    }
    else{
        return next({
            status: 400,
            message: `product_likes must be an integer`
        });
    }
}

// Export Middleware path building
module.exports = {
    list,
    
    create: [
        bodyDataHas("product_title"),
        bodyDataHas("product_description"),
        bodyDataHas("product_image"),
        bodyDataHas("product_price"),
        titleIsValid,
        descriptionIsValid,
        priceIsValid,
        asyncErrorBoundary(create),
    ],

    read: [
        isNumber,
        asyncErrorBoundary(productExists),
        asyncErrorBoundary(read),
    ],

    update: [
        isNumber,
        asyncErrorBoundary(productExists),
        bodyDataHas("product_title"),
        bodyDataHas("product_description"),
        bodyDataHas("product_image"),
        bodyDataHas("product_price"),
        titleIsValid,
        descriptionIsValid,
        priceIsValid,
        likesIsValid,
        asyncErrorBoundary(update),
    ],

    destroy: [
        isNumber,
        asyncErrorBoundary(productExists),
        asyncErrorBoundary(destroy),
    ],

    addLike: [
        isNumber,
        asyncErrorBoundary(productExists),
        asyncErrorBoundary(incrementLikes),
    ],

    removeLike: [
        isNumber,
        asyncErrorBoundary(productExists),
        asyncErrorBoundary(decrementLikes),
    ],

}