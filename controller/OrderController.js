const OrderModel = require("../models/OrdersModel");

exports.createOrders = async(req,res)=>{
    try{
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
    try{
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
    try{
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