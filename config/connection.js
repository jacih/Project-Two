const Sequelize = require('sequelize');
require('dotenv').config();

console.log('this is being different read'+ process.env.DB_NAME);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }
);

console.log('this is being read');

module.exports = sequelize;
