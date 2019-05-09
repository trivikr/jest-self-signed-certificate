const https = require("https");
const fs = require("fs");
const path = require("path");

const options = {
  key: fs.readFileSync(path.join(__dirname, "keys/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "keys/cert.pem"))
};

module.exports = port =>
  https
    .createServer(options, (req, res) => {
      res.end("HELLO WORLD!");
    })
    .listen(port);
