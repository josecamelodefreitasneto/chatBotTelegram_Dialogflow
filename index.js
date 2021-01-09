const TelegramBot = require('node-telegram-bot-api');

const token = '1482462756:AAHU36RHcwMXKeaRPVIIpgqOs5CQDgN4SKI';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
  
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Vamos pra luta !')       
  });