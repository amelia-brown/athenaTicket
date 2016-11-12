'use strict'
const DIALECT = 'postgres';
const HOST = process.env.POSTGRES || '127.0.0.1';
const PORT = 5432;
const DB = process.env.POSTGRES_DB || 'ticket';
const DB_USR = process.env.POSTGRES_USER || require('./dbAuth.js').DB_USR;
const DB_PASS = process.env.POSTGRES_PASSWORD || require('./dbAuth.js').DB_PASS;

module.exports = {
  default: 3002,
  database: `${DIALECT}://${DB_USR}:${DB_PASS}@${HOST}:${PORT}/${DB}`
};
