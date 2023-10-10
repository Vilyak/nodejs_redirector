const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const app = express();
app.use(express.static(''));
const getIP = require('ipware')().get_ip;

const DEFAULT_OFFER = 'http://liporeductlow.xcartpro.com/r11/?off=76KRijR5&lnk=57044&m=401816d786ef80b';

const UKRAINE_OFFER = 'http://shopblogger.top/biovittoriaa/r7/?off=YPbpC8Nn&lnk=32106&m=401816d786ef80b';

const BELARUS_OFFER = 'http://shopblogger.top/biovittoriaa/r8/?off=YPbpC8Nn&lnk=32106&m=401816d786ef80b';

const KZT_OFFER = 'http://shopblogger.top/leptigenmeridiandiet139/r2/?off=2dKPUybj&lnk=29171&m=401816d786ef80b';

const MOLDOVA_OFFER = 'http://shopblogger.top/harmonicalinea99/r2/?off=4YKlsJ9J&lnk=20420&m=401816d786ef80b';

const RUSSIA_OFFER = 'http://shopblogger.top/leptigenmeridiandiet139/r2/?off=2dKPUybj&lnk=29171&m=401816d786ef80b';

const GEORGIA_OFFER = 'http://welltonica.xcartpro.com/r1/?off=oYbrsqzk&lnk=61689&m=401816d786ef80b';

const ARMENIA_OFFER = 'http://ketodietacaps.xcartpro.com/r1/?off=vvD4caav&lnk=41494&m=401816d786ef80b';

const LATVIA_OFFER = 'http://ketoguru26.xcartpro.com/r7/?off=WnbrtmMX&lnk=67521&m=401816d786ef80b';

const GERMANY_OFFER = 'http://magicoa.xcartpro.com/r48/?off=76KRirdp&lnk=67113&m=401816d786ef80b';

const POLAND_OFFER = 'http://magicoa.xcartpro.com/r39/?off=76KRirdp&lnk=67008&m=401816d786ef80b';

const ROMANIA_OFFER = 'http://magicoa.xcartpro.com/r15/?off=76KRirdp&lnk=66984&m=401816d786ef80b';

const KYRGYZSTAN_OFFER = 'http://detoxiccc.xcartpro.com/r5/?off=jDb0TOm5&lnk=65941&m=401816d786ef80b';

const LITHUANIA_OFFER = 'http://ketoguru26.xcartpro.com/r37/?off=WnbrtmMX&lnk=67551&m=401816d786ef80b';

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
                            response.redirect("/ua_biovitra_test/127.0.0.1_8081/dl/index.html");
                            break;
                        case 'belarus':
                            response.redirect("/ua_biovitra_test/127.0.0.1_8081/dl/index.html");
                            break;
                        case 'kazakhstan':
                            response.redirect(KZT_OFFER);
                            break;
                        case 'moldova':
                            response.redirect(MOLDOVA_OFFER);
                            break;
                        case 'russia':
                            response.redirect(RUSSIA_OFFER);
                            break;
                        case 'georgia':
                            response.redirect(GEORGIA_OFFER);
                            break;
                        case 'armenia':
                            response.redirect(ARMENIA_OFFER);
                            break;
                        case 'latvia':
                            response.redirect(LATVIA_OFFER);
                            break;
                        case 'germany':
                            response.redirect(GERMANY_OFFER);
                            break;
                        case 'poland':
                            response.redirect(POLAND_OFFER);
                            break;
                        case 'romania':
                            response.redirect(ROMANIA_OFFER);
                            break;
                        case 'kyrgyzstan':
                            response.redirect(KYRGYZSTAN_OFFER);
                            break;
                        case 'lithuania':
                            response.redirect(LITHUANIA_OFFER);
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
