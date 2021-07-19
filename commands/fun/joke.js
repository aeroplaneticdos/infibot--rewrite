const disc = require("discord.js");

exports.run = async(client,message,args) => {
    let jokes = ["Dear Math, grow up and solve your own problems", "Why do fathers take an extra pair of socks when they go golfing?\nIn case they get a hole in one!"]
    var result = jokes[Math.floor(Math.random() * jokes.length)]

    message.channel.send(result);
}

exports.help = {
    name: "joke"
}

exports.conf = {
    aliases: []
}