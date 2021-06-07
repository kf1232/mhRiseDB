const express = require('express')
var dbAPI = express.Router()

var db_Monsters = require('../database/db_Monsters/Monsters')

/*----------------------------------------------------------------------*/
/* Monster API                                                          */
/*----------------------------------------------------------------------*/

dbAPI.get('/monsters', (req, res)=>{
    db_Monsters.readMonsters().then(result=>{
        res.end(JSON.stringify(result))
    })
})

/*----------------------------------------------------------------------*/

module.exports = dbAPI