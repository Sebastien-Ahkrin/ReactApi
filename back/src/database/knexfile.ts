import './../config'
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env

const development = {
  client: 'mysql',
  connection: {
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST
  }
}

export {
  development
}