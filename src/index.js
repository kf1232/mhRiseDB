const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.options('*', cors()) // include before other routes

const dotenv = require('dotenv')
dotenv.config()

app.use(require('./routes/testRoutes'))

const port = process.env.port || 5000
app.listen(port, ()=>{
    console.log(`App listening on https://localhost:${port}`)
})