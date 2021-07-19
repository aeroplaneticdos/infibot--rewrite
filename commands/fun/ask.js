const disc = require("discord.js");

exports.run = async(client,message,args) => {

    let list = ["no", "maybe", "i am not sure", "yes", "possibly", "i don't think so"]
    var rList = list[Math.floor(Math.random() * list.length)]

    let question = args.join(" ")
    
    if(!question) {
        question = "nothing"
    }

    let emb = new disc.MessageEmbed()
    .setTitle("Question answerer 3000")
    .setThumbnail(client.user.displayAvatarURL({size:64}))
    .addField(`You asked:`, `${question}`, true)
    .addField('I answered:', `${rList}`, true)
    .setColor("RANDOM")
    .setFooter("this command should not be taken seriosly")

    message.channel.send(emb)
}

exports.help = {
    name: "ask"
}

exports.conf = {
    aliases: []
}