const settings = require('../settings');

async function ownerCommand(sock, chatId, message) {
    if (!settings.ownerNumber) {
        await sock.sendMessage(chatId, {
            text: 'The bot owner is not configured. Set BOT_OWNER_NUMBER before using this command.'
        }, { quoted: message });
        return;
    }

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${settings.botOwner}
TEL;waid=${settings.ownerNumber}:${settings.ownerNumber}
END:VCARD`;

    await sock.sendMessage(chatId, {
        contacts: { displayName: settings.botOwner, contacts: [{ vcard }] },
    }, { quoted: message });
}

module.exports = ownerCommand;
