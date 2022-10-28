module.exports = {
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": "database_development",
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": "database_test",
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": "database_production",
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }
}