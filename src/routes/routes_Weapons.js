const express = require('express')
var dbAPI = express.Router()

var db_Weapons = require('../database/db_Weapons/Weapons')

/*----------------------------------------------------------------------*/
/* Weapon API                                                           */
/*----------------------------------------------------------------------*/

dbAPI.get('/weapons', (req, res)=>{
    db_Weapons.readWeapons().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/BO', (req, res)=>{
    db_Weapons.readBow().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/CB', (req, res)=>{
    db_Weapons.readChargeBlade().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/DB', (req, res)=>{
    db_Weapons.readDualBlades().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/GS', (req, res)=>{
    db_Weapons.readGreatSwords().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/GL', (req, res)=>{
    db_Weapons.readGunlance().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/HA', (req, res)=>{
    db_Weapons.readHammer().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/HB', (req, res)=>{
    db_Weapons.readHeavyBowgun().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/HH', (req, res)=>{
    db_Weapons.readHuntingHorn().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/IG', (req, res)=>{
    db_Weapons.readInsectGlaive().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/LA', (req, res)=>{
    db_Weapons.readLance().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/LB', (req, res)=>{
    db_Weapons.readLightBowgun().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/LS', (req, res)=>{
    db_Weapons.readLongSword().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/SA', (req, res)=>{
    db_Weapons.readSwitchAxe().then(result=>{
        res.end(JSON.stringify(result))
    })
})

dbAPI.get('/weapons/SH', (req, res)=>{
    db_Weapons.readSwordShield().then(result=>{
        res.end(JSON.stringify(result))
    })
})

/*----------------------------------------------------------------------*/    

module.exports = dbAPI