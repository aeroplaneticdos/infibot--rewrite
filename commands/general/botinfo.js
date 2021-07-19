const disc = require("discord.js");

exports.run = async (client,message,args) => {
    const emb = new disc.MessageEmbed()
    .setTitle("Infibot v2 (rewrite) || Information ")
    .addField("🤖 Developer:", "original developer: infinitii\ninfibot v2 developer: aquaticdos", true)
    .addField("🤖 Website:", "https://aquaticdos.xyz/infibot (coming soon)", true)
    .addField("🤖 Library:", "Discord.js", true)
    .addField("🤖 Discord.js Version:", "V12.5.3", true )
    .addField("🤖 Bot version:", "V2.0.100", true)
    .addField("🤖 Node.js version:", "V12.21.0", true)
    .addField("🤖 Npm version:", "V7.5.2", true)
    .setColor("GREEN");
    message.channel.send(emb)
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "botinfo"
}