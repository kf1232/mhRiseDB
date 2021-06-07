const dotenv = require('dotenv').config()

const PORT    = process.env.PORT

/*  Read config */
const RO_CONFIG = {
    user:     process.env.RO_DB_USER,
    password: process.env.RO_DB_PASS,
    database: process.env.RO_DB_DATA,
    server:   process.env.RO_DB_HOST,
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

/*  Write config */
const WR_CONFIG = {
  user:     process.env.WR_DB_USER,
  password: process.env.WR_DB_PASS,
  database: process.env.WR_DB_DATA,
  server:   process.env.WR_DB_HOST,
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

/*  Localhost config */
const LO_CONFIG = {
  user:     process.env.LO_DB_USER,
  password: process.env.LO_DB_PASS,
  database: process.env.LO_DB_DATA,
  server:   process.env.LO_DB_HOST,
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
    RO_CONFIG,
    WR_CONFIG,
    LO_CONFIG
}