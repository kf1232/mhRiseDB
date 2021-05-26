const express = require('express')
var dbAPI = express.Router()

var db = require('../database/dbOperation')

dbAPI.get('/', (req, res) => {
    res.end('endpoints:\n/items\n/monsters\n/weapons')
})

dbAPI.get('/items', (req, res)=>{
    console.log('/items ----------*----------*----------*----------*')

    db.readItems().then(result=>{
        console.log(result)
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/monsters', (req, res)=>{
    console.log('/monsters ----------*----------*----------*----------*')

    db.readMonsters().then(result=>{
        console.log(result)
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons', (req, res)=>{
    console.log('/weapons ----------*----------*----------*----------*')

    db.readWeapons().then(result=>{
        console.log(result)
        res.end(JSON.stringify(result))
    })
})

module.exports = dbAPI