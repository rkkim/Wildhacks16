var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

 var wikipedia = require("wikipedia-js");


app.post("/message", function (request, response) {
  //console.log(request.body);
  //console.log(request.body.Body);


  //var arrBody = request.body.Body.split(' ');
  //console.log(arrBody);

  var query = request.body.Body;

  var reply;

  var options = {query: query, format: "html", summaryOnly: true};
  wikipedia.searchArticle(options, function(err, htmlWikiText){
    if(err){
      console.log("An error occurred[query=%s, error=%s]", query, err);
      return;
    }
    //console.log("Query successful[query=%s, json-formatted-wiki-text=%s]", query, htmlWikiText);
    reply = htmlWikiText;
    console.log(reply);
    }
  );
  var str1 = "<Response><Message>";
  str1 = str1.concat(reply);
  str1 = str1.concat("</Message></Response>");
  console.log(str1);
  response.send(str1);
});

/*
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
*/
var listener = app.listen(1337, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
