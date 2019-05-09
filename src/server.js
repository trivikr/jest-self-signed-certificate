const http = require("http");
module.exports = port =>
  http
    .createServer((req, res) => {
      res.end("HELLO WORLD!");
    })
    .listen(port);
