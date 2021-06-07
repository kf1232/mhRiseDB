const sql = require('mssql')
const env = require('../../env.js')

async function readItems(){
    try{
        await sql.connect(env.CONFIG)
        const result = await sql.query`SELECT * FROM items`
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    readItems
}