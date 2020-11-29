var noteMessage = require("../db/noteMessage");

//using node callbacks
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    let newNote = req.body;
    noteMessage.push(newNote);
    updateDb();
    return console.log("Added new note: " + newNote.title);
  });
};
