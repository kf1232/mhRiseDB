const express = require('express')
var dbAPI = express.Router()

/*----------------------------------------------------------------------*/
/* Endpint API                                                          */
/*----------------------------------------------------------------------*/

dbAPI.get('/', (req, res) => {
    res.end(
`endpoints:
    /items

    /monsters 

    /weaponTypes

    /weapons
        =>/GS
        =>/SH`)
})

/*----------------------------------------------------------------------*/

module.exports = dbAPI