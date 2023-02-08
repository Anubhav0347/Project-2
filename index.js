const express= require ('express')
const bodyparser= require('body-parser')
const multer=require('multer')
const mongoose= require('mongoose')
const router= require("./src/route/routes")
const dotenv=require('dotenv')

dotenv.config()

const app= express()

app.use(bodyparser.json())
app.use(multer().any())
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true}
).then(()=> console.log("MongoDb is Connected"))
.catch(err=> console.log(err))

app.use('/',router)

app.listen(3001, function () {
    console.log("code is running sucsessfully on port 3001")
})

