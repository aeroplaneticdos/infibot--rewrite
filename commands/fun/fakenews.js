const disc = require("discord.js");

exports.run = async(client,message,args) => {
    let attach1 = new disc.MessageAttachment("./commands/fun/assets/news.png")

    message.channel.send(attach1)
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "fakenews"
}