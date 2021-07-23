const disc = require("discord.js");

exports.run = async(client,message,args) => {
    var dice = Math.floor(Math.random() * 6)

    const emb = new disc.MessageEmbed()
    .setAuthor("Dice roll")
    .setColor(0x388ee9)
    .setDescription(`Rolled a ${dice}`)
    message.channel.send(emb)
}

exports.conf = {
    aliases: ["roll", "diceroll"],
    cooldown: 5
}

exports.help = {
    name: "diceroll"
}