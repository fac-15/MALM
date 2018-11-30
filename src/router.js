const handlers = require('./handlers.js');

const routes = [
  '/main.css',
  '/reset.css',
  '/media/CoTech-logo.png',
  '/js/dom.js',
  '/js/request.js'
  // '/favicon.ico'
  // "/404"
];

const router = (req, res) => {
  // console.log('Malm Router');
  const url = req.url;
  if (url === '/') {
    handlers.handleHomeRoute(req, res);
  } else if (routes.includes(url)) {
    handlers.handlerPublic(req, res, url);
  } else if (url.indexOf('/data') !== -1) {
    // console.log('I have handled a data request');
    handlers.handlePartners(req, res);
  } else {
    res.writeHead(404, 'Content-Type: text/html');
    res.end('<h1>404 File not found</h1>');
  }
};

module.exports = router;
