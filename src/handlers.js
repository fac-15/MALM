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

const handlePublic = (req, res, url) => {
  const filePath = path.join(__dirname, "..", "public", url);
  const ext = url.split("."[1]);
  const extType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon"
  };

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(file);
    } else {
      res.writeHead(200, { "Content-Type": `${extType[ext]}` });
      res.end(file);
    }
  });
};

const handleApiCall = () => {
  request(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(body.url);
      console.log(body.explanation);
    }
  );
};

module.exports = {
  handleHomeRoute,
  handleApiCall,
  handlePublic
};
