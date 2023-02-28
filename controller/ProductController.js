const ProductModel = require("../models/ProductsModel");

exports.createProducts = async (req, res) => {
    try {
        /* #swagger.tags = ['Products']
           #swagger.description = 'It creates a single product*/

        /* #swagger.parameters['newProduct'] = {
                   in: 'body',
                   description: 'details of the product',
                   required: true,
                   schema: { $ref: "#/definitions/Products" }
            } */

        const product = await ProductModel.create(req.body);
        /* #swagger.responses[201] = { 
                 schema: { $ref: "#/definitions/Products" },
                 description: 'return info of the created product' 
          } */
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
    /* #swagger.tags = ['Products']
       #swagger.description = 'Get All products*/
    try {
        const products = await ProductModel.find();
        /* #swagger.responses[200] = [{ 
                   schema: { $ref: "#/definitions/Products" },
                   description: 'return info of the all products' 
            }] */
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
    /* #swagger.tags = ['Products']
       #swagger.description = 'Get Single Product*/


    /* #swagger.parameters['productId'] = {
               in: 'path',
               description: 'single product id',
               required: true,
        } */
    try {
        const getProduct = await ProductModel.findById(req.params.id);
        /* #swagger.responses[200] = { 
                   schema: { $ref: "#/definitions/Products" },
                   description: 'return info of the single product' 
            } */
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
