const fs = require("fs");
const path = require("path");
const request = require("request");

const handleHomeRoute = (req, res) => {
  const url = req.url;
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      res.writeHead(500, "Content-Type: text/html");
      res.end("<h1>500 Problem with MALM server</h1>");
    } else {
      res.writeHead(200, "Content-Type: text/html");
      res.end(file);
    }
  });
};

module.exports = {
  handleHomeRoute
};
