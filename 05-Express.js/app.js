const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use("/", (req, res, next) => {}) middleware matches any routes starting with '/'
// app.use("/something", (req, res, next) => {}) middleware matches any routes starting with '/something'
// app.get, app.post, app.put, etc. will match the url exactly, not just considering it as the beginning

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// By default, Express does not auto parse the body of the request to js object. Hence, we need a middleware to always do this before extracting that body
app.use(bodyParser.urlencoded({ extended: false }));

// Express will search for any static content from the "public" folder automatically, so we do not need to include "./public/" in the path to static content anywhere anymore
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Same as
// const server = http.createServer(app);
// server.listen(3000)
app.listen(3000);
