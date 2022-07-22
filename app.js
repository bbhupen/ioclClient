const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')
const PORT = process.env.PORT || 2000


const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
