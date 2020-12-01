//using node callbacks
const { response } = require("express");
const fs = require("fs");
const util = require("util");

const notes = JSON.parse(response);
const noteReq = req.body;
const newNote = notes.length + 1;
const addedNote = {
  id: newNote,
  title: noteReq.title,
  text: noteReq.text,
};
const deleteNote = req.params.id;

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile("db.json", "utf8", function (error, data) {
      res.json(JSON.parse(data));
    });
  });

  //adding /api/notes route
  app.post("/api/notes", function (req, res) {
    fs.readFile(
      path.join(__dirname, "db.json"),
      "utf8",
      function (error, response) {
        if (error) {
          console.log(error);
        }
        notes.push(addedNote);
        res.json(addedNote);
        fs.writeFile(
          path.join(__dirname, "db.json"),
          JSON.stringify(notes, null, 2),
          function (err) {
            if (err) throw err;
          }
        );
      }
    );

    app.delete("/api/notes/id", function (req, res) {
      fs.readFile("db.json", "utf8", function (error, res) {
        if (error) {
          console.log("Deleted note with id " + req.params.id);
        }
        let notes = JSON.parse(response);
        {
          res.json(notes.splice(deleteNote - 1));
        }
      });
    });
  });
};
