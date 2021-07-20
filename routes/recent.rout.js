const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recent.controller');

router.post('/recent', recentController.create);
router.get('/recent', recentController.getRecent);
module.exports = router;