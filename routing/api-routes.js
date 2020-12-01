//using node callbacks
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile("db.json", "utf8", function (error, data) {
      // error ? console.error(error) : console.log(data)
      res.json(JSON.parse(data));
    });
  });

  //adding /api/notes route
  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: " + newNote.title);
  });

  app.get("/api/notes/id", function (req, res) {
    res.json(notes[req.params.id]);
  });

  app.delete("/api/notes/id", function (req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id " + req.params.id);
  });
};
