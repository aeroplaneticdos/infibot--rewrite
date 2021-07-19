const disc = require("discord.js");

exports.run = async(client,message,args) => {
    let videos = ["https://www.youtube.com/watch?v=-6MmibwNNHw", "https://www.youtube.com/watch?v=VaqmCuhXibc", "https://www.youtube.com/watch?v=6UKZtLneHJg", "https://www.youtube.com/watch?v=tGLmfZWG9ho"]
    var rVideo = videos[Math.floor(Math.random() * videos.length)]
    const emb = new disc.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("A very special video for you!")
    .setDescription(`[click this button now](${rVideo})`)

    message.channel.send(emb)
}


exports.conf = {
    aliases: []
}

exports.help = {
    name: "video"
}