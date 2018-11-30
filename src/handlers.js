const fs = require("fs");
const path = require("path");
const request = require("request");
var Twitter = require("twitter");
// const config = require('./config');

const handleHomeRoute = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500 Problem with MALM server</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(file);
    }
  });
};

const handlerPublic = (req, res, url) => {
  const filePath = path.join(__dirname, "..", "public", url);
  const ext = url.split(".")[1];
  const extType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-ico",
    jpg: "image/jpeg",
    png: "image/png"
  };

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(404, "<h1>error, file not found<h1>");
    } else {
      res.writeHead(200, `Content-Type : ${extType[ext]}`);
      res.end(file);
    }
  });
};

const handlePartners = (req, response) => {
  console.log('handle partners: \n');
  request(
    'https://www.coops.tech/wp-json/wp/v2/co_op',
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      } else {
        const inputValue = req.url.split('=')[1];
        // console.log('input value: \n', inputValue);
        const filteredMembers = body.filter((member) => {
          const memberName = member.title.rendered;
          if (
            memberName.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
          ) {
            return memberName;
          }
        });
        response.end(JSON.stringify(filteredMembers));
      }
    }
  );
};

module.exports = {
  handleHomeRoute,
  handlePartners,
  handlerPublic
  // handleApiCall,
  // handleTweets
};

// -------------------------------- API ---------------------------------------
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

<<<<<<< HEAD
// const handleApiCall =()=> {
//
//   request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body.url);
//     console.log(body.explanation);
//     var html = fs.readFileSync('public/index.html', 'utf8');
//     html = html.replace('{Message}', body.explanation);
//
//   });
// }

// -------------------------------- TWITTER ---------------------------------------
// var twitterLink = body[1].acf.social_media[2].social_media_link;
// console.log(twitterLink); //twitter link
// // console.log(membersArray);
// var twitterNickname = twitterLink.split('.com/')[1];

// handleTweets(twitterNickname);
// var username = "zurdev";
// handleTweets(username);
// console.log(body);

// res.writeHead(200, { 'Content-Type': 'application/json' });
// res.end(JSON.stringify(body));
=======
const handlePartners = (req, response) => {
  request(
    "https://www.coops.tech/wp-json/wp/v2/co_op",
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      } else {
        const inputValue = req.url.split("=")[1];
        // console.log('input value: \n', inputValue);
        const filteredMembers = body.filter(member => {
          const memberName = member.title.rendered;
          if (
            memberName.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
          ) {
            return memberName;
          }
        });
        // var twitterLink = body[1].acf.social_media[2].social_media_link;
        // console.log(twitterLink); //twitter link
        // // console.log(membersArray);
        // var twitterNickname = twitterLink.split('.com/')[1];

        // handleTweets(twitterNickname);
        // var username = "zurdev";
        // handleTweets(username);
        // console.log(body);

        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify(body));
        response.end(JSON.stringify(filteredMembers));
      }
    }
  );
};
>>>>>>> master

// const handleTweets = (username) => {
//   var client = new Twitter(config);

//   var params = { screen_name: username, count: 1 };
//   client.get('statuses/user_timeline', params, function(
//     error,
//     tweets,
//     response
//   ) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('handleTweets response ---' + tweets[0].text);
//       // console.log(tweets[1].text);
//     }

//     // console.log(tweets.user); // The favorites.
//     // console.log(response);  // Raw response object.
//   });
// };

// var membersArray = []; //array to store data from obj
// body.forEach(function(item) {
//   membersArray.push(item.title.rendered);
// });

//loop to get partners twitNicknames
// var twitterNicknameArray = [];
// body.map(function(obj) {
//   if (obj.acf.social_media.length > 0) {
//     obj.acf.social_media.map(function(mediaType) {
//       if (mediaType.social_media_link.includes("https://twitter.com")) {
//         twitterNicknameArray.push(mediaType.social_media_link);
//       }
//     });
//   }
// });
// console.log(twitterNicknameArray);
