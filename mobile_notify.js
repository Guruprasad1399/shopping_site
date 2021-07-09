var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC1254564b15e4440b992388c5d947c17d', '274e7262dfa198c09a8bbdb96712e778');

// Send the text message.
client.messages.create({
    to: '+917401654415',
    from: '+19384448657',
    body: 'Hello we have sent a test message thank you :)!'
});
