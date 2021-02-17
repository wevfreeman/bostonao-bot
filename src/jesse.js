//Require internal modules
const PHRASES = require("./jesse.json");

//Replace variables within a phrase
function handlePhrase(message,phrase) {
    let nickname = message.guild.members.cache.get(message.author.id).nickname; //To get the nickname, you have to get the member object from the guild rather than the user object from the message.
    
    //Make this more efficient later, especially if more conditions are added.
    phrase = phrase.replaceAll("${USER}",nickname);
    phrase = phrase.replaceAll("${USERCAPS}",nickname.toUpperCase());
    return phrase;
};

//Execute the command
exports.Execute = function(client,message,args) {
    message.channel.send(handlePhrase(message,PHRASES[Math.floor(Math.random() * Math.floor(PHRASES.length))]));
};

//Set up the commands
exports.Command = "jesse";