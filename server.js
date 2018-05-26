//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
//deploy on local host
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    // console.log("working")
})