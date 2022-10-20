
const Products=require('../models/product')

const getAllProductsStatic= async (req,res)=>{
const products=await Products.find({})
res.status(200).json({products,nbHits:products.length})
}
const getAllProducts=async (req,res)=>{
console.log(req.query)
const val=req.query;
const products=await Products.find(val);
res.status(200).json({products,nbHits:products.length})
}
module.exports={
    getAllProducts,
    getAllProductsStatic
}