const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ProductRouter = require("./routers/ProductRouter")
const UserRouter = require("./routers/UserRouter")
const OrderRouter = require("./routers/OrderRouter")
const CartRouter = require("./routers/CartRouter")
const app = express();

dotenv.config();
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.DB)
.then(()=>{
    console.log("connected to db")
    // console.log(mongoose.connection.readyState)

});
app.use("/products",ProductRouter);
app.use("/users",UserRouter);
app.use("/orders",OrderRouter);
app.use("/cart",CartRouter);
app.listen(process.env.PORT,()=>console.log("Server is Running"));

