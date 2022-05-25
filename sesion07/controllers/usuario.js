const Usuario = require('../models/Usuario');
const { Op } = require('sequelize');

function crearUsuario(req, res) {
	var body = req.body;
	Usuario.create(body)
	.then( Usuario => res.status(200).send(Usuario))
}

function obtenerUsuarios(req, res) {
	Usuario.findAll()
	.then( Usuarios => res.status(200).send(Usuarios))
}

function modificarUsuario(req, res) {
	var body = req.body;
	var idP = req.params.id;
	Usuario.update( body, {
		where : {
			id: idP
		}
	})
	.then( Usuario => res.status(200).send(Usuario))
}

function eliminarUsuario(req, res) {
	var idP = req.params.id;
	Usuario.destroy({
		where : {
			id : idP
		}
	})
	.then(r => res.status(200).send("Se elimino el Usuario"))
}

module.exports = {
	crearUsuario,
	obtenerUsuarios,
	modificarUsuario,
	eliminarUsuario
}