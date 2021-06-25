const path = require("path");

// process.main.filename gives the name of the file that is used to run the process (app.js)
// path.dirname() will return the absolute path to the directory holding the file of the given name
module.exports = path.dirname(process.main.filename);
