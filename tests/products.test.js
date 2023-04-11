const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const 
    {
        createProducts,
        getProducts,
        getSingleProduct
    } = require("../controller/ProductController");
const ProductModel = require("../models/ProductsModel");

describe("test cases for product controller",()=>{
    let products, req,res;
    beforeEach(()=>{
        req = {}
        res = { 
            status: function(code){
                this.statusCode = code;
                return this;
            }, 
            json : function(data){
                this.data = data;
            }
        };
        products = {
            productName:"Hoodie",
            imgUrl:"https://m.media-amazon.com/images/I/81FpqE-o55S._UL1500_.jpg",
            price: 3000,
            description:"Pink color medium size hoodie",
            rating: 5
        }
    });
    afterEach(()=> {
        sinon.restore();
    })
    it("test for creating a product",async()=>{
        const req = {body:products}
        const stub = sinon.stub(ProductModel, "create").returns([products]);
        await createProducts(req, res);
        expect(stub.calledOnce).to.be.true;
        expect(res.statusCode).to.equal(201);
        expect(JSON.stringify(res.data)).to.equal(JSON.stringify({
            status: "Success",
            data: [products]
        }));
    })

    it("test for creating a product failure",async()=>{
    const stub = sinon.stub(ProductModel, "create").throws(new Error("Failed to create product"));
    await createProducts(req, res);
    expect(stub.calledOnce).to.be.true;
    expect(res.statusCode).to.equal(400);
    expect(JSON.stringify(res.data)).to.equal(JSON.stringify({
        status: "Failed",
        error:"Failed to create product"
    }));
})
it("test for getting all the products",async()=>{
    const stub = sinon.stub(ProductModel,"find").returns([products]);
    await getProducts(req,res);
    expect(stub.calledOnce).to.be.true;
    expect(res.statusCode).to.equal(200);
    expect(JSON.stringify(res.data)).to.equal(JSON.stringify({
        status:"Success",
        data:[products]
    }));
})
it("test for getting all the products failure",async()=>{
    const stub = sinon.stub(ProductModel,"find").throws(new Error("Failed to fetch products"));
    await getProducts(req,res);
    expect(stub.calledOnce).to.be.true;
    expect(res.statusCode).to.equal(400);
    expect(JSON.stringify(res.data)).to.equal(JSON.stringify({
        status:"Failed",
        error:"Failed to fetch products"
    }));
})
    it("test for getting a single product success",async()=>{
        const req = { params: { id: "63be84b2c5db42580f05577a" }};
        const stub = sinon.stub(ProductModel,"findById").returns(products);
        await getSingleProduct(req,res);
        expect(stub.calledOnce).to.be.true;
        expect(res.statusCode).to.equal(200);
        expect(JSON.stringify(res.data)).to.equal(JSON.stringify({
            status:"Success",
            data:products
        }))
    })
    it("test for getting a single product failure",async()=>{
        const req = { params: { id: "ytgtg77a" }};
        const stub = sinon.stub(ProductModel,"findById").throws(new Error("product not found"));
        await getSingleProduct(req,res);
        expect(stub.calledOnce).to.be.true;
        expect(res.statusCode).to.equal(400);
        expect(JSON.stringify(res.data)).to.equal(JSON.stringify({
            status:"Failed",
            error:"product not found"
        })) 
    })
})


