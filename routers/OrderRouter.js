
const express = require("express");
const { createOrders, getSingleOrder, getAllUserOrders} = require("../controller/OrderController");
const OrderRouter = express.Router();


OrderRouter
.route("/")
.post(createOrders)

OrderRouter
.route("/:userId")
.get(getAllUserOrders)


OrderRouter
.route("/:userId/:orderId")
.get(getSingleOrder)



module.exports = OrderRouter;