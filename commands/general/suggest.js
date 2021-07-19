const disc = require("discord.js");

exports.run = async(client,message,args) => {
    let text = args.join(" ");

    const emb = new disc.MessageEmbed()
    .setColor("GREEN")
    .setAuthor("New suggestion!")
    .addField(`${message.author.tag} has suggested:`, `${text}`);
    


    client.channels.cache.get("856531222732865556").send(emb)
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "suggest"
}