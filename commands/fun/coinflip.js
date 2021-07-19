const disc = require("discord.js");


exports.run = async(client,message,args) => {

    const attach1 = new disc.MessageAttachment("./commands/fun/assets/coinflip.gif", "coinflip.gif")
    const heads = new disc.MessageAttachment("./commands/fun/assets/heads.jpeg", "heads.png")
    const tails = new disc.MessageAttachment("./commands/fun/assets/tails.jpg", "tails.png")

    let emb = new disc.MessageEmbed()
    .attachFiles(attach1)
    .setImage("attachment://coinflip.gif")
    let msg = await message.channel.send(emb)
    let imglist = [heads, tails]
    let image = imglist[Math.floor(Math.random() * imglist.length)]

    let imgSend = setInterval(() => {
    msg.delete()
    message.channel.send(image)
    clearInterval(imgSend)
    }, 2000)
    

}

exports.help = {
    name: "coinflip"
}

exports.conf = {
    aliases: []
}