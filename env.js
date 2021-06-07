const dotenv = require('dotenv').config()
const assert = require("assert");

console.log(process.env.DB_User+' env.DB_USER')


const PORT    = process.env.PORT

const CONFIG = {
    user:     process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA,
    server:   process.env.DB_HOST,
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

/*
assert(PORT, 'PORT configuration is required')

assert(CONFIG, 'CONFIG must be a valid configuration:')
  assert(CONFIG.DB_USER, 'DB_USER failed to populate')
  assert(CONFIG.DB_PASS, 'DB_PASS failed to populate')
  assert(CONFIG.DB_DATA, 'DB_DATA failed to populate')
  assert(CONFIG.DB_HOST, 'DB_HOST failed to populate')
*/
module.exports = {
    PORT,
    CONFIG
}