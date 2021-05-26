const express = require('express')
var dbAPI = express.Router()

var db = require('../database/dbOperation')

dbAPI.get('/', (req, res) => {
    res.end('endpoints:\n/items\n/monsters\n/weapons')
})

dbAPI.get('/items', (req, res)=>{
    db.readItems().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/monsters', (req, res)=>{
    db.readMonsters().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons', (req, res)=>{
    db.readWeapons().then(result=>{
        res.end(JSON.stringify(result))
    })
})

module.exports = dbAPI