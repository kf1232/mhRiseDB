const sql = require('mssql')
const env = require('../../../env.js')
const sql_Items = require(`./sql_Items`)

const config = env.RO_CONFIG

async function readItems(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Items.selectItems)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    readItems
}