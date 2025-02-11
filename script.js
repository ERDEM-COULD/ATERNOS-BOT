const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'TRKYE.aternos.me', // Aternos sunucu IP'si
  port: 56944,              // Aternos portu
  username: 'SUNUCU BOTU', // Bot için kullanıcı adı
  password: 'bot_password', // Bot için şifre (gerekirse)
});

bot.on('spawn', () => {
  console.log('Bot sunucuya bağlandı!');
});

bot.on('chat', (username, message) => {
  if (message === 'merhaba') {
    bot.chat('Merhaba! Nasılsın?');
  }
});

bot.on('error', (err) => console.log(err));
