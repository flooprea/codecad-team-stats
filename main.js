const team = {
    _players: [
        { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
        { firstName: 'Duane', lastName: 'Peters', age: 13 },
        { firstName: 'Mark', lastName: 'Foley', age: 12 }
    ],
    _games: [
        { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 },
        { opponent: 'Dwarfs', teamPoints: 33, opponentPoints: 22 },
        { opponent: 'Sparrows', teamPoints: 44, opponentPoints: 33 }
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(fName, lName, age) {
        let player = {
            firstName: fName,
            lastName: lName,
            age: age
        };
        this._players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this._games.push(game);
    }
}

team.addPlayer('steph', 'curry', 14);
team.addPlayer('lisa', 'leslie', 22);
team.addPlayer('bugs', 'bunny', 76);

team.addGame('babulas', 44, 22);
team.addGame('bulibas', 33, 11);
team.addGame('fantasmas', 66, 25);

var playerArray = [];
var gamesArray = [];

for (var player in team._players) {
    playerArray.push(Object.values(team._players[player]));
}

for (var game in team._games) {
    gamesArray.push(Object.values(team._games[game]));
}


document.getElementById('output').innerHTML = 'Team players: ' + playerArray.join(' - ');
document.getElementById('output2').innerHTML = 'Games: ' + gamesArray.join(' | ');