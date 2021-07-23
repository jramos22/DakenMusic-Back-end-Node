const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recent.controller');

router.put('/recent', recentController.upsert);
router.get('/recent', recentController.getRecent);
module.exports = router;