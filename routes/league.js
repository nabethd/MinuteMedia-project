const express = require('express');

const leagueController = require('../controllers/league');

const router = express.Router();

/** run teamController.getLeaugeGames if the URL continue with /getMatches */
router.get('/getMatches', leagueController.getLeaugeGames);

module.exports = router;