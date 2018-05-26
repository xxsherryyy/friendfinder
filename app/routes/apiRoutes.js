//link routes to friends.js
var path = require("path");

var friends = require("../data/friends.js");

module.exports = function (app) {
    //API GET request shows JSON of friends data
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })
};
//API POST reqest shows data of submitted form
app.post("/api/friends", function (req, res) {
    for (var i = 0; i < friends; i++) {
        if (friends[i].scores === 0) {
            console.log("Match!");
        } else {
            console.log("No Match!");
        }
    };
});
//node error
// C:\Users\Sherry\desktop\smu\friend-finder\app\routes\apiRoutes.js:13
// app.post("/api/friends", function (req, res) {
// ^

// ReferenceError: app is not defined
//     at Object.<anonymous> (C:\Users\Sherry\desktop\smu\friend-finder\app\routes\apiRoutes.js:13:1)
//     at Module._compile (module.js:643:30)
//     at Object.Module._extensions..js (module.js:654:10)
//     at Module.load (module.js:556:32)
//     at tryModuleLoad (module.js:499:12)
//     at Function.Module._load (module.js:491:3)
//     at Module.require (module.js:587:17)
//     at require (internal/module.js:11:18)
//     at Object.<anonymous> (C:\Users\Sherry\desktop\smu\friend-finder\server.js:14:1)
//     at Module._compile (module.js:643:30)