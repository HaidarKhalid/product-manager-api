const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://HaidarKhalid:zAaQtRXht48rl56d@test-api.iweqpww.mongodb.net/store?retryWrites=true&w=majority")
.then(()=>console.log("connected"))
.catch(()=>console.log("error"))