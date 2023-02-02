const express = require("express")
const { createProduct, getAllProducts, updateProduct, getSingle, deleteProduct } = require("../controllers/productControllers")
const router = express.Router()

router.get("/",getAllProducts)

router.get("/:productId",getSingle)

router.post("/", createProduct)

router.put("/:productId", updateProduct )

router.delete("/:productId",deleteProduct)

module.exports = router