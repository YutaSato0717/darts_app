// Update with your config settings.

module.exports = {

  development: {
    client: "mysql2",
    connection: {
      database: "darts_app",
      user: "root",
      password: "Yuta0717",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      database: "darts_app",
      user: "root",
      password: "Yuta0717",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: "darts_app",
      user: "root",
      password: "Yuta0717",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};