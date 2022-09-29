const router = require("express").Router();

const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("../products/products.controller");

router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router.route("/:product_id")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.destroy)
    .all(methodNotAllowed);

router.route("/:product_id/like")
    .post(controller.addLike)
    .delete(controller.removeLike)
    .all(methodNotAllowed);

module.exports = router;