const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(
  'DATABASE', // Nombre de la BD
  'USER', // Usuario
  'PASSWORD', //contraseña
{
  host: 'HOST', // host 
  dialect: 'mysql' // gestor de bases de datos
});

try {
	sequelize.authenticate();
	console.log("La conexión fue exitosa")
} catch {
	console.log("La conexión fallo")
}

const Producto = sequelize.define('producto', {
	id: {
		type : DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	nombre: {
		type : DataTypes.TEXT
	},
	precio: {
		type : DataTypes.REAL
	},
	cat: {
		type : DataTypes.TEXT
	},
	desc : {
		type : DataTypes.TEXT
	}
},{
	freezeTableName: true,
	timestamps: false
})

//CREATE 
// Producto.create({
// 	id: 16,
// 	nombre: "Juguete",
// 	precio: 500,
// 	cat:  "Infantil",
// 	desc: "Juguete de accion"
// })
// .then(res => {console.log(res)})

// READ
 // SELECT * FROM PRODUCTO WHERE precio = 300;
// Producto.findAll({
// 	where: {
// 		precio: 300
// 	}
// })
// .then(res => {console.log(res)})

// //  SELECT * FROM PRODUCTO WHERE precio >= 300;
// Producto.findAll({
// 	where: {
// 		precio: {
// 			[Op.gte] : 300
// 		}
// 	}
// })
// .then(res => {console.log(res)})

// //  SELECT * FROM PRODUCTO WHERE precio >= 300 LIMIT 10;
// Producto.findAll({
// 	limit : 10,
// 	where: {
// 		precio: {
// 			[Op.gte] : 300
// 		}
// 	}
// })
// .then(res => {console.log(res)})

//  SELECT * FROM PRODUCTO LIMIT 10 ORDER BY precio;
// Producto.findAll({
// 	limit : 10,
// 	order : [['precio', 'ASC'], ['id', 'DESC']]
// })
// .then(res => {console.log(res)})

// UPDATE
// Producto.update({ nombre: "ToyMan" }, {
//   where: {
//     id: 16
//   }
// })
// .then(res => { console.log(res) })

// DELETE
Producto.destroy({
	where : { id : 101}
})
.then(res => {console.log(res)})



































