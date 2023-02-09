const mongoose = require("mongoose");

const ProductsSchema  = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product Name is required"]
    },
    imgUrl: {
        type: String,
        required: [true, "Image is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"]
    }
});

const ProductsModel = mongoose.model("products", ProductsSchema);

module.exports = ProductsModel;
