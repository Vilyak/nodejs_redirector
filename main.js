const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const app = express();
const getIP = require('ipware')().get_ip;

const DEFAULT_OFFER = 'http://liporeductlow.xcartpro.com/r11/?off=76KRijR5&lnk=57044&m=401816d786ef80b';

const UKRAINE_OFFER = 'http://biovittoriaa.xcartpro.com/r10/?off=YPbpC8Nn&lnk=64990&m=401816d786ef80b';

const BELARUS_KZT_OFFER = 'http://leptigenmeridiandiet139.xcartpro.com/r3/?off=2dKPUybj&lnk=31244&m=401816d786ef80b';

const MOLDOVA_OFFER = 'http://taliaaa.xcartpro.com/m2/?off=zaXPtEl6&lnk=17208&m=401816d786ef80b';

const RUSSIA_OFFER = 'http://liporeductlow.xcartpro.com/r11/?off=76KRijR5&lnk=57044&m=401816d786ef80b';

app.use("*", function (request, response, next) {
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

app.listen(8083);
