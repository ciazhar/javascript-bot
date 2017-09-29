var TelegramBot = require('node-telegram-bot-api'),
    
    telegram = new TelegramBot("468813156:AAEqDAoRFqxhvxMiAKpqBmBAQ3MIr6UNy9A", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hello world");
});