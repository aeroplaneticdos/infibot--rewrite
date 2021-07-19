const disc = require('discord.js');

exports.run = async(client,message,args) => {
    let rNum = Math.floor(Math.random() * 100);
    let user = message.mentions.users.first();
    if(args[0] === user) {
        user = message.mentions.members.first()
    }
    if(!user) {
        user = message.author
    } 

    const emb = new disc.MessageEmbed()
    .setTitle("How gay is " + user.username)
    .setDescription(`${user.username} is ${rNum}% gay`)
    .setColor(0x7ef9ff)
    message.channel.send(emb);
}

exports.help = {
    name: "gay"
}

exports.conf = {
    aliases: [],
    cooldown: 5
}