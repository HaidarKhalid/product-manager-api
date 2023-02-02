const express = require("express")
const productRouter = require("./routes/productRoutes.js")
const db = require("./db")
const app = express()

app.use(express.json())

app.use("/products", productRouter)

app.listen(8000,()=> console.log("listening at port 8000"))


// zAaQtRXht48rl56d

// &!hvMhQwN8$@2M6fwFUD