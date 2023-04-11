const CartModel =require("../models/CartModel");

exports.createItems = async (req,res)=>{
    try{
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
    try{
        await CartModel.findOneAndDelete({userId:req.params.userId, _id:req.params.cartId});
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
    try{
        const orders = await CartModel.find({userId: req.params.userId}).populate("product")
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