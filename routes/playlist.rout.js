const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');

//Nos permite crear nuevas playlists
router.post('/playlist', playlistController.create);

//Nos permite actualizar una playlist específica
router.put('/playlist/:id', playlistController.updateplaylist);

//Nos permite obtener todas las playlists del usuario
router.get('/playlist/:idUser', playlistController.getPlaylist);

//Nos permite obtener una playlist específica del usuario
router.get('/playlist/:idUser/:id', playlistController.getOne);

//Nos permite eliminar playlist específicas del usuario
router.delete('/playlist/:id', playlistController.deletePlaylist);

//Nos permite eliminar una canción específica del playlist del usuario
router.delete('/playlistsong/:id', playlistController.deletePlaylistSong);

//Exportamos el module de router, para ser utilizado en otro archivo
module.exports = router;