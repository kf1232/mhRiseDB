const sql = require('mssql')
const dotenv = require('dotenv')

dotenv.config();

var config = {
    user: 'read_MHR',//process.env.DB_USER,
    password: '2021',//process.env.DB_PWD,
    database: 'monsterhunter_rise',//process.env.DB_NAME,
    server: 'localhost',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}


async function readItems(){
    console.log(config)
    try{
        await sql.connect(config)
        const result = await sql.query`SELECT * FROM items`
        await sql.close()
        //console.log(result)
        return result
    } catch(err){
        console.log(err)
    }
    
}

async function readMonsters(){
    console.log(config)
    try{
        await sql.connect(config)
        const result = await sql.query`SELECT * FROM monsters`
        await sql.close()
        //console.log(result)
        return result
    } catch(err){
        console.log(err)
    }
    
}

async function readWeapons(){
    console.log(config)
    try{
        await sql.connect(config)
        const result = await sql.query`SELECT * FROM weapons`
        await sql.close()
        console.log(result)
        return result
    } catch(err){
        console.log(err)
    }
    
}

module.exports = {
    readItems,
    readMonsters,
    readWeapons
}