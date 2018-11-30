const handlers = require("./handlers.js");

const routes = [
  "/main.css",
  "/reset.css",
  "/media/CoTech-logo.png",
  "/js/dom.js",
  "/js/request.js"
];

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    handlers.handleHomeRoute(req, res);
  } else if (routes.includes(url)) {
    handlers.handlerPublic(req, res, url);
  } else if (url.indexOf("/data") !== -1) {
    handlers.handlePartners(req, res);
  } else {
    res.writeHead(404, "Content-Type: text/html");
    res.end("<h1>404 File not found</h1>");
  }
};

module.exports = router;
