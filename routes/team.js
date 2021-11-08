const express = require('express');

const teamController = require('../controllers/team');

const router = express.Router();

/** run teamController.getMatches if the URL continue with /getMatches */
router.get('/getMatches', teamController.getMatches);

module.exports = router;

