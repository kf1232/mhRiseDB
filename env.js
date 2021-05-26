const dotenv = require('dotenv').config()

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

module.exports = {
    PORT,
    CONFIG
}