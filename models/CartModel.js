const mongoose = require("mongoose");

const CartSchema  = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User Id is required"]
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: [true, "Product Id is required"]
    }
});

const CartModel = mongoose.model("carts", CartSchema);

module.exports = CartModel;