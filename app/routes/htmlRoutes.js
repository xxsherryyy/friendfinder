//dependencies for package path
var path = require("path");

module.exports = function(app) {

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"))
    });

    //if route does not exist send to homepage
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};