const db = require("../data/db")


exports.getLeaugeGames = (req, res, next) => {
    const leagueName = req.query.name;
    const status = req.query.status;
    const result = db.getAllMatches('league', leagueName, status)
    res.status(200).json({
      matches: result
    });
  };
