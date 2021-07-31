const express = require('express');

//Nos permite obtener el controlles del favorites
const favoriteController = require('../controllers/favorite.controller');
const router = express.Router();

//Nos permite agregar y actualizar las canciones favoritas
router.put('/favorite', favoriteController.upsert);

//Nos permite obtener las canciones favoritas
router.get('/favorite/:id', favoriteController.getFavorite);

//Nos permite eliminar las canciones favoritas
router.delete('/favorite', favoriteController.delete);

//Exportamos el module de router, para ser utilizado en otro archivo
module.exports = router;