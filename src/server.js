const express = require("express")
const productRouter = require("./routes/productRoutes.js")
const db = require("./db")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use("/products", productRouter)

app.listen(8000,()=> console.log("listening at port 8000"))

