// Twilio Credentials
var accountSid = '//add account id';
var authToken = '//add your auth token';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);


client.messages("//key").get(function(err, message) {
    console.log(message.body);
});

//testing send
client.messages.create({
    to: "+1234567890",
    from: "//add your number here",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
}, function(err, message) {
    console.log(message.sid);
});
