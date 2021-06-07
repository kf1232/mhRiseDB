const express = require('express')
var dbAPI = express.Router()

var db_WeaponTypes = require('../database/db_WeaponTypes/weponTypes')

/*----------------------------------------------------------------------*/
/* WeaponTypes API                                                      */
/*----------------------------------------------------------------------*/

dbAPI.get('/weaponTypes', (req, res)=>{
    db_WeaponTypes.readWeaponTypes().then(result=>{
        res.end(JSON.stringify(result))
    })
})

/*----------------------------------------------------------------------*/

module.exports = dbAPI