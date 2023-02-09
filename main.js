const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const app = express();
var getIP = require('ipware')().get_ip;

const DEFAULT_OFFER = 'https://google.com';

const UKRAINE_OFFER = 'https://ok.ru';

const BELARUS_KZT_OFFER = 'https://vk.com';

const RUSSIA_OFFER = 'https://ok.ru';

app.use("/", function (request, response, next) {
    setTimeout(() => {
        try {
            const ip = getIP(request).clientIp;

            fetch(`http://ip-api.com/json/${ip}`, {
                method: 'GET',
            }).then((res) => res.json()).then((value) => {
                console.log(JSON.stringify(value))

                if (value.status === 'fail') {
                    response.redirect(DEFAULT_OFFER);
                }
                else {
                    switch (value.country.toLowerCase()) {
                        case 'ukraine':
                            response.redirect(UKRAINE_OFFER);
                            break;
                        case 'belarus':
                            response.redirect(BELARUS_KZT_OFFER);
                            break;
                        case 'kazakhstan':
                            response.redirect(BELARUS_KZT_OFFER);
                            break;
                        case 'russia':
                            response.redirect(RUSSIA_OFFER);
                            break;
                        default: response.redirect(DEFAULT_OFFER);
                    }
                }
            }).catch((e) => {
                console.log(e);
                response.redirect(DEFAULT_OFFER);
                next(e);
            })

        } catch (e) {
            console.log(e);
            response.redirect(DEFAULT_OFFER);
            next(e);
        }
    }, 1)
});

app.listen(8080);