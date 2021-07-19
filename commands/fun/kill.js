const disc = require("discord.js");

exports.run = async(client,message,args) => {

    let killResponse = ["has fallen into the void", "fell into a black hole", "fell from 100metres high", "forgot to do their homework", "didn't do their laundry", "raged because of try hards in fps gamnes", "was a victim of being an employee for suspension studios"];
    let killRandom = killResponse[Math.floor(Math.random() * killResponse.length)]

    let user = message.mentions.users.first();
    if(args[0] === user) {
        user = message.mentions.members.first()
    }
    if(!user) {
        user = message.author
    } 

    const emb = new disc.MessageEmbed()
    .setAuthor(`Killer machine 2000`, `${user.displayAvatarURL()}`)
    .setThumbnail(`${user.displayAvatarURL({size: 64})}`)
    .setDescription(`**${user.username}** ${killRandom}`)
    .setColor("RED")
    message.channel.send(emb)

}

exports.help = {
    name: "kill"
}

exports.conf = {
    aliases: []
}