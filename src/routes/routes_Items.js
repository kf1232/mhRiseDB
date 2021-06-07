const express = require('express')
var dbAPI = express.Router()

var db_Items = require('../database/db_Items/Items')

/*----------------------------------------------------------------------*/
/* Item API                                                             */
/*----------------------------------------------------------------------*/

dbAPI.get('/items', (req, res)=>{
    db_Items.readItems().then(result=>{
        res.end(JSON.stringify(result))
    })
})

/*----------------------------------------------------------------------*/

module.exports = dbAPI