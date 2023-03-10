const ProductModel = require("../models/productModel.js")

const createProduct = async (req, res) => {
    const {mainImg, type, name, price, priceType, productStatus, warranty,youtubeReview, productWebsite, description} = req.body;
    const newProduct = await ProductModel.create({mainImg, type, name, price, priceType, productStatus, warranty,youtubeReview, productWebsite, description})
    res.json(newProduct)
}


const getAllProducts = async (req, res) => {
    const allProducts = await ProductModel.find()
    res.json(allProducts)
}

const updateProduct = async (req, res) => {
    const {productId} = req.params
    const {mainImg, type, name, price, priceType, productStatus, warranty,youtubeReview, productWebsite, description} = req.body
    const updatedProduct = await ProductModel.findByIdAndUpdate(productId, {mainImg, type, name, price, priceType, productStatus, warranty,youtubeReview, productWebsite, description}, {new: true})
    res.json(updatedProduct)
}

const getSingle = async (req, res) => {
    const {productId} = req.params
    const foundProduct = await ProductModel.findById(productId)
    res.json(foundProduct)
}

const deleteProduct = async (req, res) => {
    const {productId} = req.params
    const deletedProduct = await ProductModel.findByIdAndDelete(productId)
    res.json(deletedProduct)
}



module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    getSingle,
    deleteProduct
}

//, youtubeReview, productWebsite, description
