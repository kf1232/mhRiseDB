const { query } = require('express')
const sql = require('mssql')
const env = require('../../../env.js')
const sql_Monsters = require(`./sql_Monsters`)

const config = env.RO_CONFIG

async function readMonsters(){
    try{
        await sql.connect(config)
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