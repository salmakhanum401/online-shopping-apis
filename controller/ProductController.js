const ProductModel = require("../models/ProductsModel");

exports.createProducts = async (req, res) => {
  try {
    /* #swagger.tags = ['Products']
       #swagger.description = 'It creates a single product*/

    /* #swagger.parameters['createProducts'] = {
               in: 'body',
               description: 'Send info',
               required: true,
               schema: { $ref: "#/definitions/createProducts" }
        } */

    const product = await ProductModel.create(req.body);
    res.status(201).json({
      status: "Success",
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "Failed",
      error: err.message,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      status: "Success",
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      error: err.message,
    });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const getProduct = await ProductModel.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: getProduct,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};
