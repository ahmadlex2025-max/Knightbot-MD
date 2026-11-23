const cleanPhoneNumber = (value) => (value || '').replace(/[^0-9]/g, '');

const settings = {
  packname: process.env.BOT_PACKNAME || 'Knight Bot',
  author: process.env.BOT_AUTHOR || '‎',
  botName: process.env.BOT_NAME || 'Knight Bot',
  botOwner: process.env.BOT_OWNER_NAME || 'Bot owner',
  ownerNumber: cleanPhoneNumber(process.env.BOT_OWNER_NUMBER),
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: 'public',
  maxStoreMessages: 20,
  storeWriteInterval: 10000,
  description: 'This is a bot for managing group commands and automating tasks.',
  version: '3.0.7',
  updateZipUrl: 'https://github.com/mruniquehacker/Knightbot-MD/archive/refs/heads/main.zip',
};

module.exports = settings;
