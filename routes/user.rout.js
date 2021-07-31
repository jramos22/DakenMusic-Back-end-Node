const express = require('express');
const router = express.Router();

//Nos permite obtener el archivo de controller
const userController = require('../controllers/user.controller');

//Nos permite crear un nuevo usuario
router.post('/user', userController.create);

//Nos permite crear el correo
router.post('/users/:email', userController.loggin);

//Nos permite obtener todos los usuarios
router.get('/users', userController.getUsers);

//Nos permite obtener un usuario específico
router.get('/user/:id', userController.getUser);

//Nos permite actualizar al dato específico del usuario
router.put('/user/:id', userController.updateUser);

//Nos permite eliminar un usuario específico
router.delete('/user/:id', userController.deleteUser);

//Exportamos el module de router, para ser utilizado en otro archivo
module.exports = router;