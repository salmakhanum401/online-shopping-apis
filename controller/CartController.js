const CartModel =require("../models/CartModel");

exports.createItems = async (req,res)=>{
    /* #swagger.tags = ['Cart']
       #swagger.description = 'Create cart items*/

    /* #swagger.parameters['newCartItem'] = {
               in: 'body',
               description: 'please send productsId and userId',
               schema: { $ref: "#/definitions/Cart" },  
               required: true,
        } */
    try{
        /* #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'return info of the created cart item' 
        } */
        const item = await CartModel.create(req.body);
        res.status(201).json({
            status:"Success",
            data:item
        });
    }
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        })
    }
}

exports.deleteSingleItem = async (req,res)=>{
    /* #swagger.tags = ['Cart']
       #swagger.description = 'delete cart item*/

    /* #swagger.parameters['cartId'] = {
               in: 'path',
               description: 'cartid',
               required: true,
        } */
    /* #swagger.parameters['userId'] = {
               in: 'path',
               description: 'userId',
               required: true,
        } */
    try{
        await CartModel.findOneAndDelete({userId:req.params.userId, _id:req.params.cartId});
        /* #swagger.responses[204] = { 
               description: 'returns null' 
        } */
        res.status(204).json({
            status:"Success",
            data:null
        });
    }
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        })
    }
}

exports.getAllUserCartItems= async(req,res)=>{
    /* #swagger.tags = ['Cart']
       #swagger.description = 'all user cart items*/

    /* #swagger.parameters['userId'] = {
               in: 'path',
               description: 'userId',
               required: true,
        } */
    try{
        const orders = await CartModel.find({userId: req.params.userId}).populate("product")
        /* #swagger.responses[200] = [{ 
               schema: { $ref: "#/definitions/Cart" },
               description: 'return info of the all cart items of a user' 
        }] */
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


exports.deleteAllCartItems= async(req,res)=>{
     /* #swagger.tags = ['Cart']
       #swagger.description = 'delete all user cart items*/

    /* #swagger.parameters['userId'] = {
               in: 'path',
               description: 'userId',
               required: true,
        } */
    try{
        /* #swagger.responses[204] = { 
               description: 'delete all items in cart' 
        } */
            await CartModel.deleteMany({userId: req.params.userId})
        res.status(204).json({
            status:"Success",
            data:null,
        });
    }

    
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        });
    }
}

exports.deleteAllCartItems= async(req,res)=>{
    try{
            await CartModel.deleteMany({userId: req.params.userId})
        res.status(204).json({
            status:"Success",
            data:null,
        });
    }

    
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        });
    }
}