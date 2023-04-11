const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json')
const app = require('./app');

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("connected to db")
    // console.log(mongoose.connection.readyState)

});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.all('*',(req,res,next)=>{
    res.status(404).json({
        status:'failed',
        message:"Can't find Undefined Url on this server!"
    })
})

app.listen(process.env.PORT,()=>console.log("Server is Running"));

