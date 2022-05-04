const process = require('process');

// Recuperar el ID 
console.log('Id del proceso', process.pid);

// Consulta de variables de entorno
console.log('Variables de entorno: ', process.env.NODE_VAR);

// Argumentos de linea de comando
console.log('Argumentos: ', process.argv);

process.exit();

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));