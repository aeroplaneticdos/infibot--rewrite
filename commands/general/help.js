const disc = require("discord.js");

exports.run = async(client,message,args) => {
    let helpFun = new disc.MessageEmbed()
    .setAuthor("Infibot 2 Fun section")
    .setColor("BLUE")
    .addField("⭐ Ask", "Ask me a question!", true)
    .addField("⭐ Video", "A video(not telling you which)", true)
    .addField("⭐ U W U", "oh god please no god", true)
    .addField("⭐ Diceroll", "Roll a dice", true)
    .addField("⭐ Howgay", "How gay are you", true)
    .addField("⭐ Joke", "DAD JOKE GO BRRRRRRRRRRT", true)
    .addField("⭐ Coinflip", "Flip a coin", true)
    .addField("⭐ h i", "**h i**", true)
    .addField("⭐ Kill", "Kill somebody", true)
    .addField("⭐ Blob", "*seizure mode on*", true)
    .addField("⭐ Fakenews", "basically the media", true)
    .addField("⭐ Meme", "m e m ", true)
    .addField("⭐ Countdown", "idk", true)

    message.channel.send(helpFun)
}

exports.conf = {
    aliases: ["?", "help"]
}

exports.help = {
    name: "help"
}   