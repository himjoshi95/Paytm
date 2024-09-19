const express = require("express")
const {config} = require('dotenv')

config()
const app = express()
const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`)
})