var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC1254564b15e4440b992388c5d947c17d', '37fd80ab562c4661a9303d416e67eb33');

// Send the text message.
client.messages.create({
    to: '+919791064418',
    from: '+19384448657',
    body: 'Hello This is Guruprasad :)!'
});
