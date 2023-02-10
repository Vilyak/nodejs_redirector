const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const app = express();
const getIP = require('ipware')().get_ip;

const DEFAULT_OFFER = 'http://bunsi.xcartpro.com/r2/?off=PvpMcXOW&lnk=52840&m=401816d786ef80b'; // 'https://clickprk.com/E2HL';

const UKRAINE_OFFER = 'http://novaslimketo.xcartpro.com/r1/?off=rrXzTN43&lnk=62641&m=401816d786ef80b';

const BELARUS_KZT_OFFER = 'http://leptigenmeridiandiet139.xcartpro.com/r3/?off=PvpMcXpe&lnk=42009&m=401816d786ef80b';

const MOLDOVA_OFFER = 'http://dukan.xcartpro.com/m1/?off=OrvRTvR&lnk=2530&m=401816d786ef80b';

const RUSSIA_OFFER = 'http://bunsi.xcartpro.com/r2/?off=PvpMcXOW&lnk=52840&m=401816d786ef80b';

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
                        case 'moldova':
                            response.redirect(MOLDOVA_OFFER);
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