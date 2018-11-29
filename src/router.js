const handlers = require("./handlers.js");

const router = (req, res) => {
  console.log("Malm Router");
  const url = req.url;
  if (url === "/") {
    handlers.handleHomeRoute(req, res);
    handlers.handleApiCall(); //TEST API
  } else if (routes.includes(url)) {
    handlers.handlePublic(req, res, url);
  } else if (url.indexOf("/search") !== -1) {
    handlers.handleRequest(req, res);
  } else {
    res.writeHead(404, "Content-Type: text/html");
    res.end("<h1>404 File not found</h1>");
  }
};

const routes = [
  "/main.css",
  "/reset.css",
  "dom.js",
  "/request.js",
  "/favicon.ico",
  "/404"
];

module.exports = router;
