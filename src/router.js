const handlers = require("./handlers.js");

const router = (req, res) => {
  console.log("Malm Router");
  const url = req.url;
  if (url === "/") {
    handlers.handleHomeRoute(req, res);
    handlers.handleApiCall(); //TEST API
    handlers.handleTweets();
  } else {
    res.writeHead(404, "Content-Type: text/html");
    res.end("<h1>404 File not found</h1>");
  }
};

module.exports = router;
