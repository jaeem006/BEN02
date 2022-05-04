// MODULO INTEGRADO
var os = require('os');

var misCPUs = os.cpus();

// console.log(misCPUs);

// MODULOS DE TERCEROS (NPM)
var moment = require('moment');

var now = moment();

console.log(`Hoy es ${now}`)

// MODULOS CREADOS POR NOSOTROS
var modulo = require('./modulo');

modulo.sumar(3,7)
modulo.restar(3,7)
// modulo.multiplicar(3,7)

modulo.nombre()