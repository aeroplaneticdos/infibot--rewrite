const disc = require("discord.js");

exports.run = async(client,message,args) => {
    let helpFun = new disc.MessageEmbed()
    .setAuthor("Infibot 2 || Fun category")
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
    .setThumbnail(`${client.user.displayAvatarURL({size: 64})}`);

    const help = new disc.MessageEmbed()
    .setTitle("InfiBot v2 || Help command categories")
    .addField("😂 Fun category", "in!help fun")
    .addField("\u200B", "\u200B")
    .setColor("RED")
    .addField("🤖 General category", "in!help general")
    .setThumbnail(`${client.user.displayAvatarURL({size: 64})}`);

    const helpGen = new disc.MessageEmbed()
    .setTitle("InfiBot v2 || General category")
    .setColor("PURPLE")
    .addField("🤖 Invite", "Invite the rewrite version of infibot to your server(not really)", true)
    .addField("🤖 Ping", "the latency of the bot (result is innacurate)", true)
    .addField("🤖 Botinfo", "information about the bot", true)
    .addField("🤖 Suggest", "suggest something idk man", true)
    .setThumbnail(`${client.user.displayAvatarURL({size: 64})}`)



    if(args[0] === "fun") {
        helpSection = helpFun
    } 
    else if(args[0] === "general") 
    {
        helpSection = helpGen
    }
    else if(!args[0]) {
        helpSection = help
    }
    

    message.channel.send(helpSection)
}

exports.conf = {
    aliases: ["?", "help"]
}

exports.help = {
    name: "help"
}   