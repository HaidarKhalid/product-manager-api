const mongoose = require("mongoose")
const productShcema = mongoose.Schema({
    name: String,
    price: Number
});

const model = mongoose.model("Product", productShcema)

module.exports = model;

/* ,
    youtubeReview: String,
    productWebsite: String,
    otherPhotos: Array */