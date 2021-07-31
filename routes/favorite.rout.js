const express = require('express');
const favoriteController = require('../controllers/favorite.controller');
const router = express.Router();

router.put('/favorite', favoriteController.upsert);
router.get('/favorite/:id', favoriteController.getFavorite);
router.delete('/favorite', favoriteController.delete);
module.exports = router;