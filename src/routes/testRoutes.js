const express = require('express')
var dbAPI = express.Router()

var db_Items = require('../database/items')
var db_Weapons = require('../database/weapons')
var db_WeaponTypes = require('../database/weponTypes')
var db_Monsters = require('../database/monsters')

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
/* Item API                                                             */
/*----------------------------------------------------------------------*/

dbAPI.get('/items', (req, res)=>{
    db_Items.readItems().then(result=>{
        res.end(JSON.stringify(result))
    })
})

/*----------------------------------------------------------------------*/
/* Monster API                                                          */
/*----------------------------------------------------------------------*/

dbAPI.get('/monsters', (req, res)=>{
    db_Monsters.readMonsters().then(result=>{
        res.end(JSON.stringify(result))
    })
})

/*----------------------------------------------------------------------*/
/* Weapon API                                                           */
/*----------------------------------------------------------------------*/

dbAPI.get('/weapons', (req, res)=>{
    db_Weapons.readWeapons().then(result=>{
        res.end(JSON.stringify(result))
    })
})
    dbAPI.get('/weapons/GS', (req, res)=>{
        db_Weapons.readGreatSwords().then(result=>{
            res.end(JSON.stringify(result))
        })
    })

    dbAPI.get('/weapons/SH', (req, res)=>{
        db_Weapons.readSwordShield().then(result=>{
            res.end(JSON.stringify(result))
        })
    })

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