const sql = require('mssql')
const env = require('../../../env.js')
const sql_WeaponTypes = require(`./sql_WeaponTypes`)

const config = env.RO_CONFIG

async function readWeaponTypes(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_WeaponTypes.selectWeaponTypes)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    readWeaponTypes
}