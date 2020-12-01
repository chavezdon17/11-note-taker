const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//routes
require("./routing/api-routes")(app);
require("./routing/html-routes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
