const express = require("express")
const { config } = require('dotenv')
const rootRouter = require('./routes/index')

config()
const app = express()
const PORT = process.env.PORT

app.use('/api/v1',rootRouter)


app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`)
})