const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');

router.post('/playlist', playlistController.create);
router.get('/playlist', playlistController.getPlaylist);
module.exports = router;