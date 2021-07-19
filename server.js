const discord = require("discord.js");

const clientInit = require("./handler/client");

const client = new clientInit();

const config = require("./config.json");

require("./handler/module")(client);
require("./handler/event")(client);

client.on("warn", console.warn);
client.on("error", console.error);
client.login(config.token)