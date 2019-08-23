const knex = require('knex')
const config = require('../knexfile.js')

// Expects a config object
module.exports = knex(config.development)