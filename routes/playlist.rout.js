const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');
const playlist = require('../models/playlist.model');

router.post('/playlist', playlistController.create);
router.put('/playlist/:id', playlistController.updateplaylist);
router.get('/playlist', playlistController.getPlaylist);
router.delete('/playlist', playlistController.deletePlaylist);
router.delete('/playlist/:id', playlistController.deletePlaylistSong);
module.exports = router;