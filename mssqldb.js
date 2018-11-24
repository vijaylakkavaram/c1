const Sequelize = require('sequelize');
const sequelize = new Sequelize('Live_Chat1', 'datapullman', 'system', {
  host: 'localhost',
  dialect: 'mssql',
  operatorsAliases: false,

  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
 });