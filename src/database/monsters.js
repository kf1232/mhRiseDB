const sql = require('mssql')
const env = require('../../env.js')

async function readMonsters(){
    try{
        await sql.connect(env.CONFIG)
        const result = await sql.query`SELECT * FROM monsters`
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    readMonsters,
}