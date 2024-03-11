const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/ua_biovitra_test"));
const getIP = require('ipware')().get_ip;

const DEFAULT_OFFER = 'http://myblogshop.top/leptigenmeridiandiet139/r6/?off=2dKPUybj&lnk=59035&m=401816d786ef80b';

const UKRAINE_OFFER = 'http://myblogshop.top/biovittoriaa/r7/?off=YPbpC8Nn&lnk=32106&m=401816d786ef80b';

const BELARUS_OFFER = 'http://leptigenmeridiandiet139.xcartpro.com/r1/?off=2dKPUybj&lnk=29168&m=401816d786ef80b';

const KZT_OFFER = 'http://leptigenmeridiandiet139.xcartpro.com/r43/?off=2dKPUybj&lnk=66053&m=401816d786ef80b';

const MOLDOVA_OFFER = 'http://dukan.xcartpro.com/m1/?off=OrvRTvR&lnk=2530&m=401816d786ef80b';

const RUSSIA_OFFER = 'http://myblogshop.top/leptigenmeridiandiet139/r5/?off=2dKPUybj&lnk=56646&m=401816d786ef80b';

const GEORGIA_OFFER = 'http://myblogshop.top/welltonica/r1/?off=oYbrsqzk&lnk=61692&m=401816d786ef80b';

const ARMENIA_OFFER = 'http://togur.xcartpro.com/r1/?off=VEboFvya&lnk=75242&m=401816d786ef80b';

const LATVIA_OFFER = 'http://easyloss.xcartpro.com/r1/?off=y5bqSlgq&lnk=73809&m=401816d786ef80b';

const GERMANY_OFFER = 'http://vitasimil.xcartpro.com/r15/?off=qrXpTKal&lnk=72383&m=401816d786ef80b';

const POLAND_OFFER = 'http://ketomorin.xcartpro.com/r4/?off=vvD4c03r&lnk=47484&m=401816d786ef80b';

const ROMANIA_OFFER = 'http://ketoguru26.xcartpro.com/r17/?off=WnbrtmMX&lnk=67531&m=401816d786ef80b';

const KYRGYZSTAN_OFFER = 'http://myblogshop.top/gojicream1/r1/?off=2dKPUeGr&lnk=75044&m=401816d786ef80b';

const LITHUANIA_OFFER = 'http://easyloss.xcartpro.com/r1/?off=y5bqSlgq&lnk=73808&m=401816d786ef80b';

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
                            //response.redirect("/127.0.0.1_8081/dl/index.html");
                            break;
                        case 'belarus':
                            response.redirect(BELARUS_OFFER);
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
