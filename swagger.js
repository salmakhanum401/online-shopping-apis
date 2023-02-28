const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']


const doc = {
    info: {
        version: "1.0.0",
        title: "Shopping cart apis",
        description: "We are using Autogen to generate docs."
    },
    host: "localhost:8000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],

    tags: [
        {
            "name": "Products",
            "description": "products endpoints"
        },
        {
            "name": "Orders",
            "description": "orders endpoints"
        },
        {
            "name": "Cart",
            "description": "cart endpoints"
        },
        {
            "name": "Users",
            "description": "users endpoints"
        },
        ],
        definitions: {
            Products: {
                productName: "Jacket",
                price: 2999,
                rating:4
            },
            Users:{
                firstName:"Salma",
                lastName:"Khanum",
                emailId:"salmakhanum726@gmail.com",
                gender:"female",
                address:"Bangalore",
                phoneNumber:9876543218
            },
            Orders:{
                userId:"63be8e89c64829b30d561c07",
                products:"63be84d0c5db42580f05577d",
            },
            Cart:{
                userId:"63be8e89c64829b30d561c07",
                product:"63be8589c5db42580f055781"
            },   
        },
    }
                

swaggerAutogen(outputFile, endpointsFiles,doc).then(() => {
    require('./server.js')
})