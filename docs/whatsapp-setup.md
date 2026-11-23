# WhatsApp setup

## Before you start

- Use a dedicated WhatsApp account for the bot when possible.
- Keep the deployment terminal open during the initial association.
- Never commit `.env` or files created in `session/`.

## Configure the deployment

1. Copy `.env.example` to `.env`, or add the same variables to your hosting panel.
2. Set `BOT_OWNER_NUMBER` to your WhatsApp number in international format, digits only.
3. Optionally set `BOT_NAME` and `BOT_OWNER_NAME`.

## Associate WhatsApp

### QR code

Leave `WHATSAPP_PHONE_NUMBER` empty, then start the bot:

```bash
npm install
npm start
```

Scan the QR code using WhatsApp: **Settings → Linked devices → Link a device**.

### Pairing code

Set `WHATSAPP_PHONE_NUMBER` to the bot account's number in international format, then start the bot:

```bash
npm start
```

Enter the code printed in the terminal from WhatsApp: **Settings → Linked devices → Link a device → Link with phone number instead**.

## After linking

The session is saved under `session/`. Treat it like a password: keep it only in persistent private storage and never add it to Git.
