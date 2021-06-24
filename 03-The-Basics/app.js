const http = require("http");

// routes is read-only because the value of routes is cached by Node.js and separated from the original exported file
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
