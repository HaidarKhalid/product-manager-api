const mongoose = require("mongoose")
const productShcema = mongoose.Schema({
    mainImg: Array,
    type: String,
    name: String,
    price: Number, 
    priceType: Number,
    warranty: String,
    youtubeReview: String,
    productWebsite: String, 
    description: String
});

const model = mongoose.model("Product", productShcema)

module.exports = model;

/* ,
    youtubeReview: String,
    productWebsite: String,
    otherPhotos: Array */
