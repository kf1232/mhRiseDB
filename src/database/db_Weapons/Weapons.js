const sql = require('mssql')
const env = require('../../../env.js')
const sql_Weapons = require(`./sql_Weapons`)

const config = env.RO_CONFIG

async function readWeapons(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectWeapons)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readBow(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectBow)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readChargeBlade(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectChargeBlade)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readDualBlades(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectDualBlades)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readGreatSwords(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectGreatSword)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readGunlance(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectGunlance)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readHammer(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectHammer)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readHeavyBowgun(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectHeavyBowgun)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readHuntingHorn(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectHuntingHorn)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readInsectGlaive(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectInsectGlaive)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readLance(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectLance)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readLightBowgun(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectLightBowgun)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readLongSword(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectLongSword)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

async function readSwitchAxe(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectSwitchAxe)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}


async function readSwordShield(){
    try{
        await sql.connect(config)
        const result = await sql.query(sql_Weapons.selectSwordShield)
        await sql.close()
        return result
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    readWeapons,
    readBow,
    readChargeBlade,
    readDualBlades,
    readGreatSwords,
    readGunlance,
    readHammer,
    readHeavyBowgun,
    readHuntingHorn,
    readInsectGlaive,
    readLance,
    readLightBowgun,
    readLongSword,
    readSwitchAxe,
    readSwordShield
}