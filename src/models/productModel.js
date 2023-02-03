const mongoose = require("mongoose")
const productShcema = mongoose.Schema({
    mainImg: String,
    type: String,
    name: String,
    productStatus: String,
    price: Number, 
    priceType: Number,
    warranty: String,
    youtubeReview: String,
    productWebsite: String, 
    description: String,
});

const model = mongoose.model("Product", productShcema)

module.exports = model;

/* ,
    youtubeReview: String,
    productWebsite: String,
    otherPhotos: Array */
