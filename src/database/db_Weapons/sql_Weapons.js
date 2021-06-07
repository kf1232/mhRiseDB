var selectWeapons = `SELECT * FROM weapons`

var selectBow = `SELECT * 
                 FROM weapons 
                 WHERE weaponType = 'Bow'`

var selectChargeBlade = `SELECT * 
                         FROM weapons 
                         WHERE weaponType = 'Charge Blade'`
                         
var selectDualBlades = `SELECT * 
                        FROM weapons 
                        WHERE weaponType = 'Dual Blades'`

var selectGreatSword = `SELECT * 
                        FROM weapons
                        WHERE weaponType = 'Great Sword'`

var selectGunlance = `SELECT * 
                      FROM weapons 
                      WHERE weaponType = 'Gunlance'`

var selectHammer = `SELECT * 
                    FROM weapons 
                    WHERE weaponType = 'Hammer'`

var selectHeavyBowgun = `SELECT * 
                         FROM weapons 
                         WHERE weaponType = 'Heavy Bowgun'`

var selectHuntingHorn = `SELECT * 
                         FROM weapons 
                         WHERE weaponType = 'Hunting Horn'`

var selectInsectGlaive = `SELECT * 
                          FROM weapons 
                          WHERE weaponType = 'Insect Glaive'`

var selectLance = `SELECT * 
                   FROM weapons 
                   WHERE weaponType = 'Lance'`

var selectLightBowgun = `SELECT * 
                         FROM weapons 
                         WHERE weaponType = 'Light Bowgun'`

var selectLongSword = `SELECT * 
                       FROM weapons 
                       WHERE weaponType = 'Long Sword'`

var selectSwitchAxe = `SELECT * 
                       FROM weapons 
                       WHERE weaponType = 'Switch Axe'`
                       
var selectSwordShield = `SELECT * 
                         FROM weapons 
                         WHERE weaponType = 'Sword and Shield'`

module.exports = {
    selectWeapons,
    selectBow,
    selectChargeBlade,
    selectDualBlades,
    selectGreatSword,
    selectGunlance,
    selectHammer,
    selectHeavyBowgun,
    selectHuntingHorn,
    selectInsectGlaive,
    selectLance,
    selectLightBowgun,
    selectLongSword,
    selectSwitchAxe,
    selectSwordShield
}