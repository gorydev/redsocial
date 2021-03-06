const express = require('express');
const UserController = require('../controllers/user');
const { verificaToken, verificaAdminRol } = require('../middlewares/autenticacion');

const api = express.Router();

api.get('/home', UserController.home);
api.post('/login', UserController.loginUser);
api.post('/registro', UserController.saveUser);
api.get('/ver/:id', verificaToken, UserController.getUsuario);
api.get('/listar/:page?', verificaToken, UserController.getAllUsers);
api.put('/actualizar/:id', verificaToken, UserController.actualizarUsuario);
api.put('/borrar/:id', [verificaToken, verificaAdminRol], UserController.borrarUsuario);
api.delete('/eliminar/:id', [verificaToken, verificaAdminRol], UserController.eliminarCompletoUsuario);
api.get('/stats/:id?', verificaToken, UserController.getCounters);
api.get('/get-user-img/:imageFile', UserController.getUserImage);

module.exports = api;