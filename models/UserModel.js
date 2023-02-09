const mongoose = require("mongoose");

const UserSchema  = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    emailId: {
        type: String,
        required: [true, "Email Id is required"],
        unique: [true, "Email Id should be unique"]
    },
    password:  {
        type: String,
        required: [true, "Password is required"]
    },
    confirmPassword:  {
        type: String,
        required: [true, "Confirm Password is required"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Phone number is required"]
    },
    address:  {
        type: String,
        required: [true, "Address is required"]
    }
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
