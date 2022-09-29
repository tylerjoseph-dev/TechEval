const router = require("express").Router();

const methodNotAllowed = require("../errors/methodNotAllowed");

// Controller import - Handles Middleware
const controller = require("../products/products.controller");


// This is /products. Supports GET & POST
router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

// This is /products/:product_id. Supports GET, PUT & DELETE
router.route("/:product_id")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.destroy)
    .all(methodNotAllowed);

// This is /products/:product_id/like. Supports POST & DELETE
router.route("/:product_id/like")
    .post(controller.addLike)
    .delete(controller.removeLike)
    .all(methodNotAllowed);

module.exports = router;