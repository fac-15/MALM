const handlers = require("./handlers.js");

const router = (req, res) => {
  console.log("Malm Router");
  const url = req.url;
  if (url === "/") {
    handlers.handleHomeRoute(req, res);
  } else if (url.indexOf("public") !== -1) {
    handlers.handlerPublic(req, res, url);
  } else if (url === "/data") {
    handlers.handlePartners(req, res);

    // // handlers.handleApiCall(); //TEST API
    // var username = "zurdev";
    // handlers.handleTweets();
  } else {
    res.writeHead(404, "Content-Type: text/html");
    res.end("<h1>404 File not found</h1>");
  }
};

module.exports = router;
