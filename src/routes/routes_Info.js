const { response } = require('express')
const express = require('express')
const fs = require('fs')
let http = require('http')

var dbAPI = express.Router()

/*----------------------------------------------------------------------*/
/* Endpint API                                                          */
/*----------------------------------------------------------------------*/

dbAPI.get('/', (req, res) => {
    res.end(`endpoints:
    /

    /info

    /items

    /monsters 

    /weaponTypes

    /weapons
     ======>/[WeaponTypeID]`)
})

/*----------------------------------------------------------------------*/

module.exports = dbAPI