const express = require("express")
const { config } = require('dotenv')
const rootRouter = require('./routes/index')
const cors = require('cors')

config()
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT

app.use('/api/v1',rootRouter)


app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`)
})