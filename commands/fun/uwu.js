const disc = require("discord.js")

exports.run = async(client,message,args) => {
    const attachment = new disc.MessageAttachment("./commands/fun/assets/ALLAH.mp4") 

    message.reply("please no", attachment)
}

exports.help = {
    name: "uwu"
}

exports.conf = {
    aliases: []
}