const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');

router.post('/playlist', playlistController.create);
router.put('/playlist/:id', playlistController.updateplaylist);
//router.get('/playlist', playlistController.getPlaylist);
router.get('/playlist/:id', playlistController.getOne);
router.delete('/playlist/:id', playlistController.deletePlaylist);
router.delete('/playlistsong/:id', playlistController.deletePlaylistSong);
module.exports = router;