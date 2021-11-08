const fs = require('fs');
const rl = require("readline");
const csv = require("csv-parser");



//  In db.js we READ the CSV FILES and parse them into our DB

let all_matches = [];
let tournaments = {};
let teams = {};
let teamsCounter = 2; // Team ID is EVEN number
let tournamentsCounter = 1; // tournement ID is ODD number

/** setMatch:
 *  add the Status type to the match 
 *  and add a uniqe ID to each team and each tournament 
 */
const setMatch = (data, status) => {
    const match = {...data}
    match.status =status;
    if(!teams[match.home_team]) {
        teams[match.home_team] = {id: teamsCounter, name: match.home_team}
        teamsCounter += 2
    }
    match.home_team = teams[match.home_team]
    if(!teams[match.away_team]) {
        teams[match.away_team] = {id: teamsCounter, name: match.away_team}
        teamsCounter += 2
    }
    match.away_team = teams[match.away_team]
    if(!tournaments[match.tournament]) {
        tournaments[match.tournament] = {id: tournamentsCounter, name: match.tournament}
        tournamentsCounter += 2
    }
    match.tournament = tournaments[match.tournament]
    return match;
}


/** loadPlayed and loadUpcoming:
 *  parse the CVS files and push to all_matches array to be our DB
 *  1 array with both played and upcoming after the 'Status' and 'UniqeID' as been added
 */
exports.loadPlayed = () => {
    return fs.createReadStream("./data/result_played.csv")
    .pipe(csv())
    .on("data", (data) => { 
        all_matches.push(setMatch(data, "played"))
    })
    
}

exports.loadUpcoming = () => {
    return fs.createReadStream("./data/result_upcoming.csv")
    .pipe(csv())
    .on("data", (data) =>  { 
        all_matches.push(setMatch(data, "upcoming"))
    })
    
}


/** getAllMatches:
 *  return the response for all the matches of the team/tournement filtered/not filtered with status in JSON format  
 */

exports.getAllMatches =  (type, name, status) => {
    const filters = {
        team: (game) => game.home_team.name == name || game.away_team.name == name,
        league: (game) => game.tournament.name == name
    } 
    return all_matches.filter(filters[type]).
            filter(match => status === undefined ? true : match.status == status)
}






