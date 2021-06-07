const sql = require('mssql')
const env = require('../../env.js')

async function readWeaponTypes(){
    try{
        await sql.connect(env.CONFIG)
        const result = await sql.query`SELECT * FROM weaponTypes`
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    readWeaponTypes
}