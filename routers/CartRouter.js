
const express = require("express");
const { createItems, deleteSingleItem, getAllUserCartItems,deleteAllCartItems} = require("../controller/CartController");
const CartRouter = express.Router();

CartRouter
.route("/")
.post(createItems)

CartRouter
.route("/:userId")
.get(getAllUserCartItems)
.delete(deleteAllCartItems)


CartRouter
.route("/:userId/:cartId")
.delete(deleteSingleItem)



module.exports = CartRouter;
