const UserModel = require("../models/UserModel");

exports.createUsers = async (req, res) => {
    /* #swagger.tags = ['Users']
      #swagger.description = 'It creates a single user*/

    /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'details of the user',
               required: true,
               schema: { $ref: "#/definitions/Users" }
        } */
    try {
        if (req.body.password !== req.body.confirmPassword) {
            throw new Error("password and confirm password are not same");
        }
        const user = await UserModel.create(req.body);
        /* #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Users" },
               description: 'return info of the created user' 
        } */
        res.status(201).json({
            status: "Success",
            data: user
        });
    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            error: err.message
        });
    }
}

exports.getUser = async (req, res) => {
    /* #swagger.tags = ['Users']
     #swagger.description = 'Get single user*/
    /* #swagger.parameters['getuser'] = {
               in: 'path',
               description: 'id of the user',
               required: true,
               schema: { $ref: "#/definitions/Users" }
        } */
    try {
        const getUsers = await UserModel.findById(req.params.id);
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Users" },
               description: 'return info of the user' 
        } */
        res.status(200).json({
            status: "Success",
            data: getUsers
        });
    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            error: err.message
        });
    }
}


exports.handleSignIn = async (req, res) => {
    try {
        /* #swagger.tags = ['Users']
          #swagger.description = 'Sign In request*/

        /* #swagger.parameters['emailId'] = {
                in: 'body',
                description: 'details of the user',
                required: true,
    } */
        //we r finding the one record with email id in users collection 
        const getUser = await UserModel.findOne({ emailId: req.body.emailId });
        if (!getUser || getUser.password !== req.body.password) {
            throw new Error("Incorrect email or password");
        }
        const { _id, firstName, lastName, address, phoneNumber, gender, emailId } = getUser;
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Users" },
               description: 'return info of the user' 
        } */
        res.status(200).json({
            status: "Success",
            data: { _id, firstName, lastName, emailId, address, phoneNumber, gender }
        });
    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            error: err.message
        });
    }
}