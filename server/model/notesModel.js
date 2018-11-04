const NotesAPI = require('../../lib/notes/index.js');

module.exports = function (app, router) {
    app.get('/notes/docsList', function (req, res) {
        NotesAPI.fetchNotes()
            .then((data) => {
                res.json(data);
            }, (err) => {
                res.send(err);
            })
        
    });

    app.get("/notes/getDoc", function(req, res) {
      NotesAPI.fetchNote(req.query.key).then(data => {
          res.json(data);
        }, err => {
          res.send(err);
        });
    });
}
