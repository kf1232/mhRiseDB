const express = require('express')
const app = express()
const cors = require('cors')
const env = require('../env.js')

app.use(cors())
app.options('*', cors()) // include before other routes

app.use(require('./routes/routes_Info'))
app.use(require(`./routes/routes_Items`))
app.use(require(`./routes/routes_Monsters`))
app.use(require(`./routes/routes_Weapons`))
app.use(require(`./routes/routes_WeaponTypes`))

const port = env.PORT || 5000
app.listen(port, ()=>{
    console.log(`App listening on https://localhost:${port}`)
})