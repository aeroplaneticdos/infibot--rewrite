const disc = require('discord.js')

exports.run = async(client,message,args) => {
    let msg = await message.channel.send('Wait for a small bit please');
    let latency = msg.createdTimestamp - message.createdTimestamp;
    let embed = new disc.MessageEmbed()
        .setColor("RED")
        .setTitle("🏓 Ping Pong!")
        .setDescription(`${latency} ms`)
    msg.delete();
    message.channel.send(embed);
}

exports.help = {
    name: "ping",
    description: "ping"
}

exports.conf = {
    aliases: ["ping"]
}