const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ProductRouter = require("./routers/ProductRouter")
const UserRouter = require("./routers/UserRouter")
const OrderRouter = require("./routers/OrderRouter")
const CartRouter = require("./routers/CartRouter")
const app = express();

dotenv.config();
app.use(express.json())
app.use(cors())

app.use("/users",UserRouter);
app.use("/products",ProductRouter);
app.use("/orders",OrderRouter);
app.use("/cart",CartRouter);
app.get("/",(req,res,next)=>{
    res.status(200).json({
        status:"success",
        message:"Server is up and running"
    })
})
module.exports = app;