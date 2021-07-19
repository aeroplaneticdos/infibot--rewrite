const disc = require("discord.js");

exports.run = async(client,message,args) => {
    const emb = new disc.MessageEmbed()
    .setColor("BLUE")
    .setDescription("[invite me](https://aquaticdos.xyz/invite)")
    .setAuthor("Infibot v2 (rewrite) || Invite")
    message.channel.send(emb);
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "invite"
}