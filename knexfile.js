
module.exports = {

  development: {
    client: 'mysql',
    version: '8.0',
    connection: {
      host : '127.0.0.1',
      port : '3306',
      user : 'root',
      password : 'secret',
      database : 'node_docker'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'mysql',
    version: '8.0',
    connection: {
      host : '127.0.0.1',
      port : '3306',
      user : 'root',
      password : 'secret',
      database : 'node_docker'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
