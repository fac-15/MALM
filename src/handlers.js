const fs = require("fs");
const path = require("path");
const request = require("request");
var Twitter = require('twitter');

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


// const handleApiCall = (req, res) => {
//
//   request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body.url);
//     console.log(body.explanation);
//     var result = body.explanation;
//     // return result;
//
//     res.writeHead(200, {'Content-Type' : 'application/json'});
//     res.end(JSON.stringify(result));
//
//   });

  // const url = req.url;
  // const filePath = path.join(__dirname, "..", "public", "index.html");
  // fs.readFile(filePath, (err, file) => {
  //   if (err) {
  //     console.log(err);
  //     res.writeHead(500, "Content-Type: text/html");
  //     res.end("<h1>500 Problem with MALM server</h1>");
  //   } else {
  //     res.writeHead(200, "Content-Type: text/html");
  //     res.end(file);
  //   }
  // });
// };

const handleApiCall =()=> {

  request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    var html = fs.readFileSync('public/index.html', 'utf8');
    html = html.replace('{Message}', body.explanation);

  });
}

const handleTweets = () =>{
  var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  onsole.log(tweets);  // The favorites.
  console.log(response);  // Raw response object.
});
}

module.exports = {
  handleHomeRoute,
  handleApiCall,
  handleTweets
};
