const OrderModel = require("../models/OrderModel");

exports.createOrders = async(req,res)=>{
    /* #swagger.tags = ['Orders']
       #swagger.description = 'It creates a single order*/

    /* #swagger.parameters['createOrders'] = {
               in: 'body',
               description: 'order info',
               required: true,
               schema: { $ref: "#/definitions/Orders" }
        } */
    try{
         /* #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Orders" },
               description: 'return info of the created Order' 
        } */
        const order = await OrderModel.create(req.body);
        res.status(201).json({
            status:"Success",
            data:order
        });
    }
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        });
    }
}


exports.getSingleOrder= async(req,res)=>{
    /* #swagger.tags = ['Orders']
       #swagger.description = 'Get single user order*/

    /* #swagger.parameters['userId'] = {
               in: 'path',
               description: 'User id of the order',
               required: true,
        } */

    /* #swagger.parameters['orderId'] = {
               in: 'path',
               description: 'Order id of the specific order',
               required: true,
        } */
    try{
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Orders" },
               description: 'return info of the single Order' 
        } */
        const singleOrder = await OrderModel.findOne({userId: req.params.userId, _id: req.params.orderId})
        res.status(200).json({
            status:"Success",
            data:singleOrder
        });
    }
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        });
    }
}

exports.getAllUserOrders= async(req,res)=>{
    /* #swagger.tags = ['Orders']
       #swagger.description = 'Get single user order*/

    /* #swagger.parameters['userId'] = {
               in: 'path',
               description: 'User id of the order',
               required: true,
        } */
    try{
        /* #swagger.responses[200] = [{ 
               schema: { $ref: "#/definitions/Orders" },
               description: 'return info of the all user Orders' 
        }] */
        const orders = await OrderModel.find({userId: req.params.userId}).populate("products")
        res.status(200).json({
            status:"Success",
            data:orders
        });
    }
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        });
    }
}