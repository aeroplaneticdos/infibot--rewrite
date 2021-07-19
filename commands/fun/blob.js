const disc = require("discord.js");

exports.run = async(client,message,args) => {
    const attach = new disc.MessageAttachment("./commands/fun/assets/partyblob.gif")
    message.channel.send(attach);
}

exports.help = {
    name: "blob"
}

exports.conf = {
    aliases: []
}