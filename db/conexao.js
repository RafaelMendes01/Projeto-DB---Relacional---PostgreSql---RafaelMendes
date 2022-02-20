const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'rafael',
      database: 'projeto-knex'
    }
  });
  
  module.exports = knex;