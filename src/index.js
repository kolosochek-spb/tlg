const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const main = require("./main");

bot.catch(err => console.log(err));
bot.start(ctx => ctx.reply("Started"));
bot.command("main", main);

bot.launch();
