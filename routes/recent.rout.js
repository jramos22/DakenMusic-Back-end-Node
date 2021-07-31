const express = require('express');
const router = express.Router();

//Nos permite obtener el archivo de controller
const recentController = require('../controllers/recent.controller');

//Nos permite actualizar la última canción reciente
router.put('/recent/:id', recentController.upsert);

//Nos permite obtener la última canción reciente
router.get('/recent/:id', recentController.getRecent);

//Exportamos el module de router, para ser utilizado en otro archivo
module.exports = router;