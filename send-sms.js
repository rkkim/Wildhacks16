// Twilio Credentials
var accountSid = 'AC66e6db1893e36d311136d6ee76ec8371';
var authToken = 'fee1cfd6814d1b9df8ac09665977de4d';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);


client.messages("MM800f449d0399ed014aae2bcc0cc2f2ec").get(function(err, message) {
    console.log(message.body);
});

client.messages.create({
    to: "+13018415848",
    from: "+12405415953",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
}, function(err, message) {
    console.log(message.sid);
});
