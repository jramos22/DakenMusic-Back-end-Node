const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

router.post('/favorite', favoriteController.create);
router.get('/favorite', favoriteController.getFavorite);
module.exports = router;