const sql = require('mssql')
const env = require('../../env.js')

async function readWeapons(){
    try{
        await sql.connect(env.CONFIG)
        const result = await sql.query`SELECT * FROM weapons`
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}
    async function readGreatSwords(){
        try{
            await sql.connect(env.CONFIG)
            var query = "SELECT * FROM weapons WHERE weaponType = 'Great Sword' ";
            const result = await sql.query(query)
            await sql.close()
            return result
        } catch(err){
            console.log(err)
        }
    }
    async function readSwordShield(){
        try{
            await sql.connect(env.CONFIG)
            var query = "SELECT * FROM weapons WHERE weaponType = 'Sword and Shield' ";
            const result = await sql.query(query)
            await sql.close()
            return result
        } catch(err){
            console.log(err)
        }
    }

module.exports = {
    readWeapons,
    readGreatSwords,
    readSwordShield
}