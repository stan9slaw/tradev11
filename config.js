module.exports = {
    bots: {
        'bot_1': { // bot_1 is the unique ID.. keep on incrementing the number
            "siteName": "Bot 1", // the name that's displayed on site
            "accountName": "login-username",
            "password": "login-password",
            "twoFactorCode": "two-factor-code", // SHOULD LOOK SIMILAR: IasiQSK630acR5GwNayCtATNs20=
            "identitySecret": "identity-secret", // SHOULD LOOK SIMILAR: RhZrVqO4R5bM9cMPWVtx2Vzlj1g=
            "steamID64": "bot-steamid", // steamID64
            "personaName": "My website - Bot #1" // nickname for bot
        }
    },
    steamApiKey: 'steam-api-key', // get it here https://steamcommunity.com/dev/apikey
    site: {
        header: 'MyAwesomeSite.com',
        copyrights: 'Copyright © MyAwesomeSite.com 2016'
    },
    domain: 'myawesomesite.com', // notice there's no http:// (example.com)
    website: 'http://myawesomesite.com', // notice there's no / at the end of the url (http://example.com)
    websitePort: 80, // Make sure you don't have apache or nginx running. Or else change port and make a reverse proxy?
    tradeMessage: 'Trade offer from MyAwesomeSite.com | If you did not request this offer or the offer looks invalid please decline.',
    rates: {
        ignoreItemsBelow: 0.05, // Ignore items below this price (price * rate < ignoreItemsBelow)
        trashPriceBelow: 0.2, // Items below this price are considered trash
        // Items
        user: {
            key: 1,
            knife: 0.95,
            rare_skin: 0.95,
            weapon: 0.9,
            misc: 0.85,
            trash: 0.7
        },
        bot: {
            key: 1.05,
            knife: 1,
            rare_skin: 1,
            weapon: 0.95,
            misc: 0.9,
            trash: 0.8
        }
    }
};
