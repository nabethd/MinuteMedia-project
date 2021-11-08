const db = require("../data/db")


exports.getMatches = (req, res, next) => {
    const teamName = req.query.name;
    const status = req.query.status;
    const result = db.getAllMatches('team', teamName, status)
    res.status(200).json({
      matches: result
    });
  };
