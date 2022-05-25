const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'DATABASE', // Nombre de la BD
  'USER', // Usuario
  'PASSWORD', //contraseña
{
  host: 'HOST', // host  
  dialect: 'mysql' // gestor de bases de datos
});

module.exports = sequelize;