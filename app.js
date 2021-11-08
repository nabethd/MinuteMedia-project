const http = require('http');
const express = require('express');

const db = require("./data/db");


const teamRoutes = require('./routes/team');
const leaugeRoutes = require('./routes/league');
const app = express();

/** send to teamRoutes/leaugeRoutes if the URL start with team | league */
app.use('/team', teamRoutes);
app.use('/league', leaugeRoutes);

/** we finish here the on("end") for the loadPlayed and loadUpcoming just before we start the listen */
db.loadPlayed().on("end", () => {

    db.loadUpcoming().on("end", () => {
        app.listen(8080);
    })
});
