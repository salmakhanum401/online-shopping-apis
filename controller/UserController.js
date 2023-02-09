const UserModel = require("../models/UserModel");

exports.createUsers = async (req,res) =>{
    try{
        if(req.body.password !== req.body.confirmPassword){
            throw new Error("password and confirm password are not same");
        }
        const user = await UserModel.create(req.body);
        res.status(201).json({
            status:"Success",
            data:user
        });
    }
    catch(err){
        res.status(400).json({
            status:"Failed",
            error: err.message
        });
    }
}

exports.getUser = async (req,res) =>{
    try{
        const getUsers = await UserModel.findById(req.params.id);
        res.status(200).json({
            status:"Success",
            data:getUsers
        });
    }
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        });
    }
}


exports.handleSignIn = async (req,res) =>{
    try{
        //we r finding the one record with email id in users collection 
        const getUser = await UserModel.findOne({emailId: req.body.emailId});
        if(!getUser  || getUser.password !== req.body.password){
            throw new Error("Incorrect email or password");
        }
        const {_id,  firstName,lastName, address, phoneNumber, gender, emailId} = getUser;
        res.status(200).json({
            status:"Success",
            data: {_id,  firstName,lastName, emailId, address, phoneNumber, gender}
        });
    }
    catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        });
    }
}