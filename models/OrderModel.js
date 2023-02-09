const mongoose = require("mongoose");

const OrdersSchema  = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User Id is required"]
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: [true, "Product Id is required"]
    }],
    createdAt:  {
        type: Date,
        default: Date.now()
    }
});

const OrdersModel = mongoose.model("orders", OrdersSchema);

module.exports = OrdersModel;