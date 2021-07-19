exports.run = async(client,message,args) => {
    let num = 10;
    var msg = await message.channel.send(11)
    const counter = setInterval(() => {
        msg.edit(num --)
    if(num === -1) {
        clearInterval(counter)
    }
    
    }, 1000)
    
}

exports.help = {
    name: "coundown"
}

exports.conf = {
    aliases: ["countdown"],
    cooldown: 10
}