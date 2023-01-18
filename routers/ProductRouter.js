const express = require("express");
const {createProducts, getProducts, getSingleProduct} = require("../controller/ProductController")
const ProductRouter = express.Router();

ProductRouter
.route("/")
.post(createProducts)
.get(getProducts)

ProductRouter
.route("/:id")
.get(getSingleProduct)

module.exports = ProductRouter;