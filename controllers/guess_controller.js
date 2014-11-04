var ID = require('../utils/id');
var controller = {
    startGuess : function(req, res) {
        var what = req.params.what;
        var room = ID.next(what);
        res.render('guesses', {title: 'GAME!!', what: what, room: room, newRoom: true});
    },
    joinGuess: function(req, res) {
        var what = req.params.what;
        var room = req.params.room;
        res.render('guesses', {title: 'GAME!!', what: what, room: room, newRoom: false});
    }
};

module.exports = controller;