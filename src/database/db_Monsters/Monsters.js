const { query } = require('express')
const sql = require('mssql')
const env = require('../../../env.js')
const sql_Monsters = require(`./sql_Monsters`)

async function readMonsters(){
    try{
        await sql.connect(env.RO_CONFIG)
        const result = await sql.query(sql_Monsters.selectMonsters)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    readMonsters,
}