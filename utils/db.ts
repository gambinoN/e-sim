import { Package } from "@/types/types";

export function initializeDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('PackageDatabase', 1);

        request.onupgradeneeded = (event) => {
            const db = request.result;
            if (!db.objectStoreNames.contains('packages')) {
                db.createObjectStore('packages', { keyPath: 'packageCode' });
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

export async function storeHardcodedPackageData(): Promise<void> {
    const hardcodedPackages: Package[] = [
        {
            "packageCode": "CKH007",
            "slug": "EU-42_5_30",
            "name": "Europe 5GB 30Days",
            "price": 260000,
            "currencyCode": "USD",
            "volume": 5368709120,
            "smsStatus": 1,
            "dataType": 1,
            "unusedValidTime": 180,
            "duration": 30,
            "durationUnit": "DAY",
            "location": "NO,RS,DE,RU,BE,FI,PT,BG,DK,LT,LU,LV,HR,UA,FR,HU,SE,SI,SK,GB,IE,MK,GG,EE,GI,IM,CH,MT,IS,IT,GR,ES,AT,CY,AX,CZ,JE,PL,RO,LI,NL,TR",
            "description": "Europe 5GB 30Days",
            "activeType": 2,
            "favorite": false,
            "retailPrice": 140000,
            "speed": "3G/4G/5G",
            "ipExport": "Norway/NO",
            "supportTopUpType": 2,
            "locationNetworkList": [
                {
                    "locationName": "Iceland",
                    "locationLogo": "/img/flags/is.png",
                    "locationCode": "IS",
                    "operatorList": [
                        {
                            "operatorName": "Nova",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Síminn",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ireland",
                    "locationLogo": "/img/flags/ie.png",
                    "locationCode": "IE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Eir",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Italy",
                    "locationLogo": "/img/flags/it.png",
                    "locationCode": "IT",
                    "operatorList": [
                        {
                            "operatorName": "Iliad",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Latvia",
                    "locationLogo": "/img/flags/lv.png",
                    "locationCode": "LV",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "LMT",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bite",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Lithuania",
                    "locationLogo": "/img/flags/lt.png",
                    "locationCode": "LT",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "BITĖ",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Luxembourg",
                    "locationLogo": "/img/flags/lu.png",
                    "locationCode": "LU",
                    "operatorList": [
                        {
                            "operatorName": "POST",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tango",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Malta",
                    "locationLogo": "/img/flags/mt.png",
                    "locationCode": "MT",
                    "operatorList": [
                        {
                            "operatorName": "GO",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Melita",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Netherlands",
                    "locationLogo": "/img/flags/nl.png",
                    "locationCode": "NL",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "KPN",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Poland",
                    "locationLogo": "/img/flags/pl.png",
                    "locationCode": "PL",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Play",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Portugal",
                    "locationLogo": "/img/flags/pt.png",
                    "locationCode": "PT",
                    "operatorList": [
                        {
                            "operatorName": "NOS",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "MEO",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Romania",
                    "locationLogo": "/img/flags/ro.png",
                    "locationCode": "RO",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Digi.Mobil",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovakia",
                    "locationLogo": "/img/flags/sk.png",
                    "locationCode": "SK",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovenia",
                    "locationLogo": "/img/flags/si.png",
                    "locationCode": "SI",
                    "operatorList": [
                        {
                            "operatorName": "Mobitel",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telemach",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Spain",
                    "locationLogo": "/img/flags/es.png",
                    "locationCode": "ES",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Movistar",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Yoigo",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Sweden",
                    "locationLogo": "/img/flags/se.png",
                    "locationCode": "SE",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Switzerland",
                    "locationLogo": "/img/flags/ch.png",
                    "locationCode": "CH",
                    "operatorList": [
                        {
                            "operatorName": "Sunrise",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Salt",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ukraine",
                    "locationLogo": "/img/flags/ua.png",
                    "locationCode": "UA",
                    "operatorList": [
                        {
                            "operatorName": "lifecell",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Kyivstar",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "United Kingdom",
                    "locationLogo": "/img/flags/gb.png",
                    "locationCode": "GB",
                    "operatorList": [
                        {
                            "operatorName": "T-Mobile",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Aaland Islands",
                    "locationLogo": "/img/flags/ax.png",
                    "locationCode": "AX",
                    "operatorList": [
                        {
                            "operatorName": "AMT",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Isle of Man",
                    "locationLogo": "/img/flags/im.png",
                    "locationCode": "IM",
                    "operatorList": [
                        {
                            "operatorName": "Pronto GSM",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Jersey",
                    "locationLogo": "/img/flags/je.png",
                    "locationCode": "JE",
                    "operatorList": [
                        {
                            "operatorName": "JT",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Russia",
                    "locationLogo": "/img/flags/ru.png",
                    "locationCode": "RU",
                    "operatorList": [
                        {
                            "operatorName": "Beeline",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Guernsey",
                    "locationLogo": "/img/flags/gg.png",
                    "locationCode": "GG",
                    "operatorList": [
                        {
                            "operatorName": "JT",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Liechtenstein",
                    "locationLogo": "/img/flags/li.png",
                    "locationCode": "LI",
                    "operatorList": [
                        {
                            "operatorName": "FL1",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "7acht",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "North Macedonia",
                    "locationLogo": "/img/flags/mk.png",
                    "locationCode": "MK",
                    "operatorList": [
                        {
                            "operatorName": "vip",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Norway",
                    "locationLogo": "/img/flags/no.png",
                    "locationCode": "NO",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Serbia",
                    "locationLogo": "/img/flags/rs.png",
                    "locationCode": "RS",
                    "operatorList": [
                        {
                            "operatorName": "VIP",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "MTS",
                            "networkType": "3G"
                        }
                    ]
                },
                {
                    "locationName": "Gibraltar",
                    "locationLogo": "/img/flags/gi.png",
                    "locationCode": "GI",
                    "operatorList": [
                        {
                            "operatorName": "GibTel",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Austria",
                    "locationLogo": "/img/flags/at.png",
                    "locationCode": "AT",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Hutchison",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Belgium",
                    "locationLogo": "/img/flags/be.png",
                    "locationCode": "BE",
                    "operatorList": [
                        {
                            "operatorName": "Base",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Proximus",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Bulgaria",
                    "locationLogo": "/img/flags/bg.png",
                    "locationCode": "BG",
                    "operatorList": [
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vivacom",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Croatia",
                    "locationLogo": "/img/flags/hr.png",
                    "locationCode": "HR",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Cyprus",
                    "locationLogo": "/img/flags/cy.png",
                    "locationCode": "CY",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "PrimeTel",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Epic",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Czech Republic",
                    "locationLogo": "/img/flags/cz.png",
                    "locationCode": "CZ",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Turkey",
                    "locationLogo": "/img/flags/tr.png",
                    "locationCode": "TR",
                    "operatorList": [
                        {
                            "operatorName": "Avea",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Turkcell",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Denmark",
                    "locationLogo": "/img/flags/dk.png",
                    "locationCode": "DK",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "TDC",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Estonia",
                    "locationLogo": "/img/flags/ee.png",
                    "locationCode": "EE",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Finland",
                    "locationLogo": "/img/flags/fi.png",
                    "locationCode": "FI",
                    "operatorList": [
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia / DNA",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "France",
                    "locationLogo": "/img/flags/fr.png",
                    "locationCode": "FR",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "SFR",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bouygues",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Free Mobile",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Germany",
                    "locationLogo": "/img/flags/de.png",
                    "locationCode": "DE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Greece",
                    "locationLogo": "/img/flags/gr.png",
                    "locationCode": "GR",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Hungary",
                    "locationLogo": "/img/flags/hu.png",
                    "locationCode": "HU",
                    "operatorList": [
                        {
                            "operatorName": "Telenor Hungary",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "4G"
                        }
                    ]
                }
            ]
        },
        {
            "packageCode": "CKH484",
            "slug": "EU-42_1_7",
            "name": "Europe 1GB 7Days",
            "price": 71000,
            "currencyCode": "USD",
            "volume": 1073741824,
            "smsStatus": 1,
            "dataType": 1,
            "unusedValidTime": 180,
            "duration": 7,
            "durationUnit": "DAY",
            "location": "NO,RS,DE,RU,BE,FI,PT,BG,DK,LT,LU,LV,HR,UA,FR,HU,SE,SI,SK,GB,IE,MK,GG,EE,GI,IM,CH,MT,IS,IT,GR,ES,AT,CY,AX,CZ,JE,PL,RO,LI,NL,TR",
            "description": "Europe 1GB 7Days",
            "activeType": 2,
            "favorite": false,
            "retailPrice": 36000,
            "speed": "3G/4G",
            "ipExport": "Norway/NO",
            "supportTopUpType": 2,
            "locationNetworkList": [
                {
                    "locationName": "Iceland",
                    "locationLogo": "/img/flags/is.png",
                    "locationCode": "IS",
                    "operatorList": [
                        {
                            "operatorName": "Nova",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Síminn",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ireland",
                    "locationLogo": "/img/flags/ie.png",
                    "locationCode": "IE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Eir",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Italy",
                    "locationLogo": "/img/flags/it.png",
                    "locationCode": "IT",
                    "operatorList": [
                        {
                            "operatorName": "Iliad",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Latvia",
                    "locationLogo": "/img/flags/lv.png",
                    "locationCode": "LV",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "LMT",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bite",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Lithuania",
                    "locationLogo": "/img/flags/lt.png",
                    "locationCode": "LT",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "BITĖ",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Luxembourg",
                    "locationLogo": "/img/flags/lu.png",
                    "locationCode": "LU",
                    "operatorList": [
                        {
                            "operatorName": "POST",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tango",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Malta",
                    "locationLogo": "/img/flags/mt.png",
                    "locationCode": "MT",
                    "operatorList": [
                        {
                            "operatorName": "GO",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Melita",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Netherlands",
                    "locationLogo": "/img/flags/nl.png",
                    "locationCode": "NL",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "KPN",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Poland",
                    "locationLogo": "/img/flags/pl.png",
                    "locationCode": "PL",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Play",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Portugal",
                    "locationLogo": "/img/flags/pt.png",
                    "locationCode": "PT",
                    "operatorList": [
                        {
                            "operatorName": "NOS",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "MEO",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Romania",
                    "locationLogo": "/img/flags/ro.png",
                    "locationCode": "RO",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Digi.Mobil",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovakia",
                    "locationLogo": "/img/flags/sk.png",
                    "locationCode": "SK",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovenia",
                    "locationLogo": "/img/flags/si.png",
                    "locationCode": "SI",
                    "operatorList": [
                        {
                            "operatorName": "Mobitel",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telemach",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Spain",
                    "locationLogo": "/img/flags/es.png",
                    "locationCode": "ES",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Movistar",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Yoigo",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Sweden",
                    "locationLogo": "/img/flags/se.png",
                    "locationCode": "SE",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Switzerland",
                    "locationLogo": "/img/flags/ch.png",
                    "locationCode": "CH",
                    "operatorList": [
                        {
                            "operatorName": "Sunrise",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Salt",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ukraine",
                    "locationLogo": "/img/flags/ua.png",
                    "locationCode": "UA",
                    "operatorList": [
                        {
                            "operatorName": "lifecell",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Kyivstar",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "United Kingdom",
                    "locationLogo": "/img/flags/gb.png",
                    "locationCode": "GB",
                    "operatorList": [
                        {
                            "operatorName": "T-Mobile",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Aaland Islands",
                    "locationLogo": "/img/flags/ax.png",
                    "locationCode": "AX",
                    "operatorList": [
                        {
                            "operatorName": "AMT",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Isle of Man",
                    "locationLogo": "/img/flags/im.png",
                    "locationCode": "IM",
                    "operatorList": [
                        {
                            "operatorName": "Pronto GSM",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Jersey",
                    "locationLogo": "/img/flags/je.png",
                    "locationCode": "JE",
                    "operatorList": [
                        {
                            "operatorName": "JT",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Russia",
                    "locationLogo": "/img/flags/ru.png",
                    "locationCode": "RU",
                    "operatorList": [
                        {
                            "operatorName": "Beeline",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Guernsey",
                    "locationLogo": "/img/flags/gg.png",
                    "locationCode": "GG",
                    "operatorList": [
                        {
                            "operatorName": "JT",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Liechtenstein",
                    "locationLogo": "/img/flags/li.png",
                    "locationCode": "LI",
                    "operatorList": [
                        {
                            "operatorName": "FL1",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "7acht",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "North Macedonia",
                    "locationLogo": "/img/flags/mk.png",
                    "locationCode": "MK",
                    "operatorList": [
                        {
                            "operatorName": "vip",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Norway",
                    "locationLogo": "/img/flags/no.png",
                    "locationCode": "NO",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Serbia",
                    "locationLogo": "/img/flags/rs.png",
                    "locationCode": "RS",
                    "operatorList": [
                        {
                            "operatorName": "VIP",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "MTS",
                            "networkType": "3G"
                        }
                    ]
                },
                {
                    "locationName": "Gibraltar",
                    "locationLogo": "/img/flags/gi.png",
                    "locationCode": "GI",
                    "operatorList": [
                        {
                            "operatorName": "GibTel",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Austria",
                    "locationLogo": "/img/flags/at.png",
                    "locationCode": "AT",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Hutchison",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Belgium",
                    "locationLogo": "/img/flags/be.png",
                    "locationCode": "BE",
                    "operatorList": [
                        {
                            "operatorName": "Base",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Proximus",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Bulgaria",
                    "locationLogo": "/img/flags/bg.png",
                    "locationCode": "BG",
                    "operatorList": [
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vivacom",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Croatia",
                    "locationLogo": "/img/flags/hr.png",
                    "locationCode": "HR",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Cyprus",
                    "locationLogo": "/img/flags/cy.png",
                    "locationCode": "CY",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "PrimeTel",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Epic",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Czech Republic",
                    "locationLogo": "/img/flags/cz.png",
                    "locationCode": "CZ",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Turkey",
                    "locationLogo": "/img/flags/tr.png",
                    "locationCode": "TR",
                    "operatorList": [
                        {
                            "operatorName": "Avea",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Turkcell",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Denmark",
                    "locationLogo": "/img/flags/dk.png",
                    "locationCode": "DK",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "TDC",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Estonia",
                    "locationLogo": "/img/flags/ee.png",
                    "locationCode": "EE",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Finland",
                    "locationLogo": "/img/flags/fi.png",
                    "locationCode": "FI",
                    "operatorList": [
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia / DNA",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "France",
                    "locationLogo": "/img/flags/fr.png",
                    "locationCode": "FR",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "SFR",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bouygues",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Free Mobile",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Germany",
                    "locationLogo": "/img/flags/de.png",
                    "locationCode": "DE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Greece",
                    "locationLogo": "/img/flags/gr.png",
                    "locationCode": "GR",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Hungary",
                    "locationLogo": "/img/flags/hu.png",
                    "locationCode": "HU",
                    "operatorList": [
                        {
                            "operatorName": "Telenor Hungary",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "4G"
                        }
                    ]
                }
            ]
        },
        {
            "packageCode": "CKH500",
            "slug": "EU-42_20_30",
            "name": "Europe 20GB 30Days",
            "price": 790000,
            "currencyCode": "USD",
            "volume": 21474836480,
            "smsStatus": 1,
            "dataType": 1,
            "unusedValidTime": 180,
            "duration": 30,
            "durationUnit": "DAY",
            "location": "NO,RS,DE,RU,BE,FI,PT,BG,DK,LT,LU,LV,HR,UA,FR,HU,SE,SI,SK,GB,IE,MK,GG,EE,GI,IM,CH,MT,IS,IT,GR,ES,AT,CY,AX,CZ,JE,PL,RO,LI,NL,TR",
            "description": "Europe 20GB 30Days",
            "activeType": 2,
            "favorite": false,
            "retailPrice": 400000,
            "speed": "3G/4G",
            "ipExport": "Norway/NO",
            "supportTopUpType": 2,
            "locationNetworkList": [
                {
                    "locationName": "Iceland",
                    "locationLogo": "/img/flags/is.png",
                    "locationCode": "IS",
                    "operatorList": [
                        {
                            "operatorName": "Nova",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Síminn",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ireland",
                    "locationLogo": "/img/flags/ie.png",
                    "locationCode": "IE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Eir",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Italy",
                    "locationLogo": "/img/flags/it.png",
                    "locationCode": "IT",
                    "operatorList": [
                        {
                            "operatorName": "Iliad",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Latvia",
                    "locationLogo": "/img/flags/lv.png",
                    "locationCode": "LV",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "LMT",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bite",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Lithuania",
                    "locationLogo": "/img/flags/lt.png",
                    "locationCode": "LT",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "BITĖ",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Luxembourg",
                    "locationLogo": "/img/flags/lu.png",
                    "locationCode": "LU",
                    "operatorList": [
                        {
                            "operatorName": "POST",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tango",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Malta",
                    "locationLogo": "/img/flags/mt.png",
                    "locationCode": "MT",
                    "operatorList": [
                        {
                            "operatorName": "GO",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Melita",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Netherlands",
                    "locationLogo": "/img/flags/nl.png",
                    "locationCode": "NL",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "KPN",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Poland",
                    "locationLogo": "/img/flags/pl.png",
                    "locationCode": "PL",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Play",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Portugal",
                    "locationLogo": "/img/flags/pt.png",
                    "locationCode": "PT",
                    "operatorList": [
                        {
                            "operatorName": "NOS",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "MEO",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Romania",
                    "locationLogo": "/img/flags/ro.png",
                    "locationCode": "RO",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Digi.Mobil",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovakia",
                    "locationLogo": "/img/flags/sk.png",
                    "locationCode": "SK",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovenia",
                    "locationLogo": "/img/flags/si.png",
                    "locationCode": "SI",
                    "operatorList": [
                        {
                            "operatorName": "Mobitel",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telemach",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Spain",
                    "locationLogo": "/img/flags/es.png",
                    "locationCode": "ES",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Movistar",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Yoigo",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Sweden",
                    "locationLogo": "/img/flags/se.png",
                    "locationCode": "SE",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Switzerland",
                    "locationLogo": "/img/flags/ch.png",
                    "locationCode": "CH",
                    "operatorList": [
                        {
                            "operatorName": "Sunrise",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Salt",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ukraine",
                    "locationLogo": "/img/flags/ua.png",
                    "locationCode": "UA",
                    "operatorList": [
                        {
                            "operatorName": "lifecell",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Kyivstar",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "United Kingdom",
                    "locationLogo": "/img/flags/gb.png",
                    "locationCode": "GB",
                    "operatorList": [
                        {
                            "operatorName": "T-Mobile",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Aaland Islands",
                    "locationLogo": "/img/flags/ax.png",
                    "locationCode": "AX",
                    "operatorList": [
                        {
                            "operatorName": "AMT",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Isle of Man",
                    "locationLogo": "/img/flags/im.png",
                    "locationCode": "IM",
                    "operatorList": [
                        {
                            "operatorName": "Pronto GSM",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Jersey",
                    "locationLogo": "/img/flags/je.png",
                    "locationCode": "JE",
                    "operatorList": [
                        {
                            "operatorName": "JT",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Russia",
                    "locationLogo": "/img/flags/ru.png",
                    "locationCode": "RU",
                    "operatorList": [
                        {
                            "operatorName": "Beeline",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Guernsey",
                    "locationLogo": "/img/flags/gg.png",
                    "locationCode": "GG",
                    "operatorList": [
                        {
                            "operatorName": "JT",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Liechtenstein",
                    "locationLogo": "/img/flags/li.png",
                    "locationCode": "LI",
                    "operatorList": [
                        {
                            "operatorName": "FL1",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "7acht",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "North Macedonia",
                    "locationLogo": "/img/flags/mk.png",
                    "locationCode": "MK",
                    "operatorList": [
                        {
                            "operatorName": "vip",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Norway",
                    "locationLogo": "/img/flags/no.png",
                    "locationCode": "NO",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Serbia",
                    "locationLogo": "/img/flags/rs.png",
                    "locationCode": "RS",
                    "operatorList": [
                        {
                            "operatorName": "VIP",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "MTS",
                            "networkType": "3G"
                        }
                    ]
                },
                {
                    "locationName": "Gibraltar",
                    "locationLogo": "/img/flags/gi.png",
                    "locationCode": "GI",
                    "operatorList": [
                        {
                            "operatorName": "GibTel",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Austria",
                    "locationLogo": "/img/flags/at.png",
                    "locationCode": "AT",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Hutchison",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Belgium",
                    "locationLogo": "/img/flags/be.png",
                    "locationCode": "BE",
                    "operatorList": [
                        {
                            "operatorName": "Base",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Proximus",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Bulgaria",
                    "locationLogo": "/img/flags/bg.png",
                    "locationCode": "BG",
                    "operatorList": [
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vivacom",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Croatia",
                    "locationLogo": "/img/flags/hr.png",
                    "locationCode": "HR",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Cyprus",
                    "locationLogo": "/img/flags/cy.png",
                    "locationCode": "CY",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "PrimeTel",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Epic",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Czech Republic",
                    "locationLogo": "/img/flags/cz.png",
                    "locationCode": "CZ",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Turkey",
                    "locationLogo": "/img/flags/tr.png",
                    "locationCode": "TR",
                    "operatorList": [
                        {
                            "operatorName": "Avea",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Turkcell",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Denmark",
                    "locationLogo": "/img/flags/dk.png",
                    "locationCode": "DK",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "TDC",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Estonia",
                    "locationLogo": "/img/flags/ee.png",
                    "locationCode": "EE",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Finland",
                    "locationLogo": "/img/flags/fi.png",
                    "locationCode": "FI",
                    "operatorList": [
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia / DNA",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "France",
                    "locationLogo": "/img/flags/fr.png",
                    "locationCode": "FR",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "SFR",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bouygues",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Free Mobile",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Germany",
                    "locationLogo": "/img/flags/de.png",
                    "locationCode": "DE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Greece",
                    "locationLogo": "/img/flags/gr.png",
                    "locationCode": "GR",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Hungary",
                    "locationLogo": "/img/flags/hu.png",
                    "locationCode": "HU",
                    "operatorList": [
                        {
                            "operatorName": "Telenor Hungary",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "4G"
                        }
                    ]
                }
            ]
        },
        {
            "packageCode": "PGXJN6W2T",
            "slug": "EU-42_50_180",
            "name": "Europe 50GB 180Days",
            "price": 1580000,
            "currencyCode": "USD",
            "volume": 53687091200,
            "smsStatus": 1,
            "dataType": 1,
            "unusedValidTime": 180,
            "duration": 180,
            "durationUnit": "DAY",
            "location": "NO,RS,DE,RU,BE,FI,PT,BG,DK,LT,LU,LV,HR,UA,FR,HU,SE,SI,SK,GB,IE,MK,GG,EE,GI,IM,CH,MT,IS,IT,GR,ES,AT,CY,AX,CZ,JE,PL,RO,LI,NL,TR",
            "description": "Europe 50GB 180Days",
            "activeType": 2,
            "favorite": false,
            "retailPrice": 900000,
            "speed": "3G/4G",
            "ipExport": "Norway/NO",
            "supportTopUpType": 2,
            "locationNetworkList": [
                {
                    "locationName": "Iceland",
                    "locationLogo": "/img/flags/is.png",
                    "locationCode": "IS",
                    "operatorList": [
                        {
                            "operatorName": "Nova",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Síminn",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ireland",
                    "locationLogo": "/img/flags/ie.png",
                    "locationCode": "IE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Eir",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Italy",
                    "locationLogo": "/img/flags/it.png",
                    "locationCode": "IT",
                    "operatorList": [
                        {
                            "operatorName": "Iliad",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Latvia",
                    "locationLogo": "/img/flags/lv.png",
                    "locationCode": "LV",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "LMT",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bite",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Lithuania",
                    "locationLogo": "/img/flags/lt.png",
                    "locationCode": "LT",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "BITĖ",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Luxembourg",
                    "locationLogo": "/img/flags/lu.png",
                    "locationCode": "LU",
                    "operatorList": [
                        {
                            "operatorName": "POST",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tango",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Malta",
                    "locationLogo": "/img/flags/mt.png",
                    "locationCode": "MT",
                    "operatorList": [
                        {
                            "operatorName": "GO",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Melita",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Netherlands",
                    "locationLogo": "/img/flags/nl.png",
                    "locationCode": "NL",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "KPN",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Poland",
                    "locationLogo": "/img/flags/pl.png",
                    "locationCode": "PL",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Play",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Portugal",
                    "locationLogo": "/img/flags/pt.png",
                    "locationCode": "PT",
                    "operatorList": [
                        {
                            "operatorName": "NOS",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "MEO",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Romania",
                    "locationLogo": "/img/flags/ro.png",
                    "locationCode": "RO",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Digi.Mobil",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovakia",
                    "locationLogo": "/img/flags/sk.png",
                    "locationCode": "SK",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovenia",
                    "locationLogo": "/img/flags/si.png",
                    "locationCode": "SI",
                    "operatorList": [
                        {
                            "operatorName": "Mobitel",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telemach",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Spain",
                    "locationLogo": "/img/flags/es.png",
                    "locationCode": "ES",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Movistar",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Yoigo",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Sweden",
                    "locationLogo": "/img/flags/se.png",
                    "locationCode": "SE",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Switzerland",
                    "locationLogo": "/img/flags/ch.png",
                    "locationCode": "CH",
                    "operatorList": [
                        {
                            "operatorName": "Sunrise",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Salt",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ukraine",
                    "locationLogo": "/img/flags/ua.png",
                    "locationCode": "UA",
                    "operatorList": [
                        {
                            "operatorName": "lifecell",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Kyivstar",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "United Kingdom",
                    "locationLogo": "/img/flags/gb.png",
                    "locationCode": "GB",
                    "operatorList": [
                        {
                            "operatorName": "T-Mobile",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Aaland Islands",
                    "locationLogo": "/img/flags/ax.png",
                    "locationCode": "AX",
                    "operatorList": [
                        {
                            "operatorName": "AMT",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Isle of Man",
                    "locationLogo": "/img/flags/im.png",
                    "locationCode": "IM",
                    "operatorList": [
                        {
                            "operatorName": "Pronto GSM",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Jersey",
                    "locationLogo": "/img/flags/je.png",
                    "locationCode": "JE",
                    "operatorList": [
                        {
                            "operatorName": "JT",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Russia",
                    "locationLogo": "/img/flags/ru.png",
                    "locationCode": "RU",
                    "operatorList": [
                        {
                            "operatorName": "Beeline",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Guernsey",
                    "locationLogo": "/img/flags/gg.png",
                    "locationCode": "GG",
                    "operatorList": [
                        {
                            "operatorName": "JT",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Liechtenstein",
                    "locationLogo": "/img/flags/li.png",
                    "locationCode": "LI",
                    "operatorList": [
                        {
                            "operatorName": "FL1",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "7acht",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "North Macedonia",
                    "locationLogo": "/img/flags/mk.png",
                    "locationCode": "MK",
                    "operatorList": [
                        {
                            "operatorName": "vip",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Norway",
                    "locationLogo": "/img/flags/no.png",
                    "locationCode": "NO",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Serbia",
                    "locationLogo": "/img/flags/rs.png",
                    "locationCode": "RS",
                    "operatorList": [
                        {
                            "operatorName": "VIP",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "MTS",
                            "networkType": "3G"
                        }
                    ]
                },
                {
                    "locationName": "Gibraltar",
                    "locationLogo": "/img/flags/gi.png",
                    "locationCode": "GI",
                    "operatorList": [
                        {
                            "operatorName": "GibTel",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Austria",
                    "locationLogo": "/img/flags/at.png",
                    "locationCode": "AT",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Hutchison",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Belgium",
                    "locationLogo": "/img/flags/be.png",
                    "locationCode": "BE",
                    "operatorList": [
                        {
                            "operatorName": "Base",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Proximus",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Bulgaria",
                    "locationLogo": "/img/flags/bg.png",
                    "locationCode": "BG",
                    "operatorList": [
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vivacom",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Croatia",
                    "locationLogo": "/img/flags/hr.png",
                    "locationCode": "HR",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Cyprus",
                    "locationLogo": "/img/flags/cy.png",
                    "locationCode": "CY",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "PrimeTel",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Epic",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Czech Republic",
                    "locationLogo": "/img/flags/cz.png",
                    "locationCode": "CZ",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Turkey",
                    "locationLogo": "/img/flags/tr.png",
                    "locationCode": "TR",
                    "operatorList": [
                        {
                            "operatorName": "Avea",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Turkcell",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Denmark",
                    "locationLogo": "/img/flags/dk.png",
                    "locationCode": "DK",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "TDC",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Estonia",
                    "locationLogo": "/img/flags/ee.png",
                    "locationCode": "EE",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Finland",
                    "locationLogo": "/img/flags/fi.png",
                    "locationCode": "FI",
                    "operatorList": [
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia / DNA",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "France",
                    "locationLogo": "/img/flags/fr.png",
                    "locationCode": "FR",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "SFR",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bouygues",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Free Mobile",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Germany",
                    "locationLogo": "/img/flags/de.png",
                    "locationCode": "DE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Greece",
                    "locationLogo": "/img/flags/gr.png",
                    "locationCode": "GR",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Hungary",
                    "locationLogo": "/img/flags/hu.png",
                    "locationCode": "HU",
                    "operatorList": [
                        {
                            "operatorName": "Telenor Hungary",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "4G"
                        }
                    ]
                }
            ]
        },
        {
            "packageCode": "PJK6T8JT2",
            "slug": "EU-30_3_30",
            "name": "Europe(30+ areas) 3GB 30Days",
            "price": 47000,
            "currencyCode": "USD",
            "volume": 3221225472,
            "smsStatus": 1,
            "dataType": 1,
            "unusedValidTime": 180,
            "duration": 30,
            "durationUnit": "DAY",
            "location": "NO,DE,BE,FI,PT,BG,DK,LT,LU,LV,HR,UA,FR,HU,SE,SI,SK,GB,IE,EE,CH,MT,IS,IT,GR,ES,AT,CY,CZ,PL,RO,LI,NL,TR",
            "description": "Europe(30+ areas) 3GB 30Days",
            "activeType": 2,
            "favorite": false,
            "retailPrice": 94000,
            "speed": "3G/4G",
            "ipExport": "Norway/NO",
            "supportTopUpType": 2,
            "locationNetworkList": [
                {
                    "locationName": "Iceland",
                    "locationLogo": "/img/flags/is.png",
                    "locationCode": "IS",
                    "operatorList": [
                        {
                            "operatorName": "Nova",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Síminn",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ireland",
                    "locationLogo": "/img/flags/ie.png",
                    "locationCode": "IE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Eir",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Italy",
                    "locationLogo": "/img/flags/it.png",
                    "locationCode": "IT",
                    "operatorList": [
                        {
                            "operatorName": "Iliad",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Latvia",
                    "locationLogo": "/img/flags/lv.png",
                    "locationCode": "LV",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "LMT",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bite",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Lithuania",
                    "locationLogo": "/img/flags/lt.png",
                    "locationCode": "LT",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "BITĖ",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Luxembourg",
                    "locationLogo": "/img/flags/lu.png",
                    "locationCode": "LU",
                    "operatorList": [
                        {
                            "operatorName": "POST",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tango",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Malta",
                    "locationLogo": "/img/flags/mt.png",
                    "locationCode": "MT",
                    "operatorList": [
                        {
                            "operatorName": "GO",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Melita",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Netherlands",
                    "locationLogo": "/img/flags/nl.png",
                    "locationCode": "NL",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "KPN",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Poland",
                    "locationLogo": "/img/flags/pl.png",
                    "locationCode": "PL",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Play",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Portugal",
                    "locationLogo": "/img/flags/pt.png",
                    "locationCode": "PT",
                    "operatorList": [
                        {
                            "operatorName": "NOS",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "MEO",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Romania",
                    "locationLogo": "/img/flags/ro.png",
                    "locationCode": "RO",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Digi.Mobil",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovakia",
                    "locationLogo": "/img/flags/sk.png",
                    "locationCode": "SK",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovenia",
                    "locationLogo": "/img/flags/si.png",
                    "locationCode": "SI",
                    "operatorList": [
                        {
                            "operatorName": "Mobitel",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telemach",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Spain",
                    "locationLogo": "/img/flags/es.png",
                    "locationCode": "ES",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Movistar",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Yoigo",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Sweden",
                    "locationLogo": "/img/flags/se.png",
                    "locationCode": "SE",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Switzerland",
                    "locationLogo": "/img/flags/ch.png",
                    "locationCode": "CH",
                    "operatorList": [
                        {
                            "operatorName": "Sunrise",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Salt",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ukraine",
                    "locationLogo": "/img/flags/ua.png",
                    "locationCode": "UA",
                    "operatorList": [
                        {
                            "operatorName": "lifecell",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Kyivstar",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "United Kingdom",
                    "locationLogo": "/img/flags/gb.png",
                    "locationCode": "GB",
                    "operatorList": [
                        {
                            "operatorName": "T-Mobile",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Liechtenstein",
                    "locationLogo": "/img/flags/li.png",
                    "locationCode": "LI",
                    "operatorList": [
                        {
                            "operatorName": "FL1",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "7acht",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Norway",
                    "locationLogo": "/img/flags/no.png",
                    "locationCode": "NO",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Austria",
                    "locationLogo": "/img/flags/at.png",
                    "locationCode": "AT",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Hutchison",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Belgium",
                    "locationLogo": "/img/flags/be.png",
                    "locationCode": "BE",
                    "operatorList": [
                        {
                            "operatorName": "Base",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Proximus",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Bulgaria",
                    "locationLogo": "/img/flags/bg.png",
                    "locationCode": "BG",
                    "operatorList": [
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vivacom",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Croatia",
                    "locationLogo": "/img/flags/hr.png",
                    "locationCode": "HR",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Cyprus",
                    "locationLogo": "/img/flags/cy.png",
                    "locationCode": "CY",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "PrimeTel",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Epic",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Czech Republic",
                    "locationLogo": "/img/flags/cz.png",
                    "locationCode": "CZ",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Turkey",
                    "locationLogo": "/img/flags/tr.png",
                    "locationCode": "TR",
                    "operatorList": [
                        {
                            "operatorName": "Avea",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Turkcell",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Denmark",
                    "locationLogo": "/img/flags/dk.png",
                    "locationCode": "DK",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "TDC",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Estonia",
                    "locationLogo": "/img/flags/ee.png",
                    "locationCode": "EE",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Finland",
                    "locationLogo": "/img/flags/fi.png",
                    "locationCode": "FI",
                    "operatorList": [
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia / DNA",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "France",
                    "locationLogo": "/img/flags/fr.png",
                    "locationCode": "FR",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "SFR",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bouygues",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Free Mobile",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Germany",
                    "locationLogo": "/img/flags/de.png",
                    "locationCode": "DE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Greece",
                    "locationLogo": "/img/flags/gr.png",
                    "locationCode": "GR",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Hungary",
                    "locationLogo": "/img/flags/hu.png",
                    "locationCode": "HU",
                    "operatorList": [
                        {
                            "operatorName": "Telenor Hungary",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "4G"
                        }
                    ]
                }
            ]
        },
        {
            "packageCode": "PHC4X21NC",
            "slug": "EU-30_20_30",
            "name": "Europe(30+ areas) 20GB 30Days",
            "price": 200000,
            "currencyCode": "USD",
            "volume": 21474836480,
            "smsStatus": 1,
            "dataType": 1,
            "unusedValidTime": 180,
            "duration": 30,
            "durationUnit": "DAY",
            "location": "NO,DE,BE,FI,PT,BG,DK,LT,LU,LV,HR,UA,FR,HU,SE,SI,SK,GB,IE,EE,CH,MT,IS,IT,GR,ES,AT,CY,CZ,PL,RO,LI,NL,TR",
            "description": "Europe(30+ areas) 20GB 30Days",
            "activeType": 2,
            "favorite": false,
            "retailPrice": 400000,
            "speed": "3G/4G",
            "ipExport": "Norway/NO",
            "supportTopUpType": 2,
            "locationNetworkList": [
                {
                    "locationName": "Iceland",
                    "locationLogo": "/img/flags/is.png",
                    "locationCode": "IS",
                    "operatorList": [
                        {
                            "operatorName": "Nova",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Síminn",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ireland",
                    "locationLogo": "/img/flags/ie.png",
                    "locationCode": "IE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Eir",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Italy",
                    "locationLogo": "/img/flags/it.png",
                    "locationCode": "IT",
                    "operatorList": [
                        {
                            "operatorName": "Iliad",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Latvia",
                    "locationLogo": "/img/flags/lv.png",
                    "locationCode": "LV",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "LMT",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bite",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Lithuania",
                    "locationLogo": "/img/flags/lt.png",
                    "locationCode": "LT",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "BITĖ",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Luxembourg",
                    "locationLogo": "/img/flags/lu.png",
                    "locationCode": "LU",
                    "operatorList": [
                        {
                            "operatorName": "POST",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tango",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Malta",
                    "locationLogo": "/img/flags/mt.png",
                    "locationCode": "MT",
                    "operatorList": [
                        {
                            "operatorName": "GO",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Melita",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Netherlands",
                    "locationLogo": "/img/flags/nl.png",
                    "locationCode": "NL",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "KPN",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Poland",
                    "locationLogo": "/img/flags/pl.png",
                    "locationCode": "PL",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Play",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Portugal",
                    "locationLogo": "/img/flags/pt.png",
                    "locationCode": "PT",
                    "operatorList": [
                        {
                            "operatorName": "NOS",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "MEO",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Romania",
                    "locationLogo": "/img/flags/ro.png",
                    "locationCode": "RO",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Digi.Mobil",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovakia",
                    "locationLogo": "/img/flags/sk.png",
                    "locationCode": "SK",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovenia",
                    "locationLogo": "/img/flags/si.png",
                    "locationCode": "SI",
                    "operatorList": [
                        {
                            "operatorName": "Mobitel",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telemach",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Spain",
                    "locationLogo": "/img/flags/es.png",
                    "locationCode": "ES",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Movistar",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Yoigo",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Sweden",
                    "locationLogo": "/img/flags/se.png",
                    "locationCode": "SE",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Switzerland",
                    "locationLogo": "/img/flags/ch.png",
                    "locationCode": "CH",
                    "operatorList": [
                        {
                            "operatorName": "Sunrise",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Salt",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ukraine",
                    "locationLogo": "/img/flags/ua.png",
                    "locationCode": "UA",
                    "operatorList": [
                        {
                            "operatorName": "lifecell",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Kyivstar",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "United Kingdom",
                    "locationLogo": "/img/flags/gb.png",
                    "locationCode": "GB",
                    "operatorList": [
                        {
                            "operatorName": "T-Mobile",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Liechtenstein",
                    "locationLogo": "/img/flags/li.png",
                    "locationCode": "LI",
                    "operatorList": [
                        {
                            "operatorName": "FL1",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "7acht",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Norway",
                    "locationLogo": "/img/flags/no.png",
                    "locationCode": "NO",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Austria",
                    "locationLogo": "/img/flags/at.png",
                    "locationCode": "AT",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Hutchison",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Belgium",
                    "locationLogo": "/img/flags/be.png",
                    "locationCode": "BE",
                    "operatorList": [
                        {
                            "operatorName": "Base",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Proximus",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Bulgaria",
                    "locationLogo": "/img/flags/bg.png",
                    "locationCode": "BG",
                    "operatorList": [
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vivacom",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Croatia",
                    "locationLogo": "/img/flags/hr.png",
                    "locationCode": "HR",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Cyprus",
                    "locationLogo": "/img/flags/cy.png",
                    "locationCode": "CY",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "PrimeTel",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Epic",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Czech Republic",
                    "locationLogo": "/img/flags/cz.png",
                    "locationCode": "CZ",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Turkey",
                    "locationLogo": "/img/flags/tr.png",
                    "locationCode": "TR",
                    "operatorList": [
                        {
                            "operatorName": "Avea",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Turkcell",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Denmark",
                    "locationLogo": "/img/flags/dk.png",
                    "locationCode": "DK",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "TDC",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Estonia",
                    "locationLogo": "/img/flags/ee.png",
                    "locationCode": "EE",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Finland",
                    "locationLogo": "/img/flags/fi.png",
                    "locationCode": "FI",
                    "operatorList": [
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia / DNA",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "France",
                    "locationLogo": "/img/flags/fr.png",
                    "locationCode": "FR",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "SFR",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bouygues",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Free Mobile",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Germany",
                    "locationLogo": "/img/flags/de.png",
                    "locationCode": "DE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Greece",
                    "locationLogo": "/img/flags/gr.png",
                    "locationCode": "GR",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Hungary",
                    "locationLogo": "/img/flags/hu.png",
                    "locationCode": "HU",
                    "operatorList": [
                        {
                            "operatorName": "Telenor Hungary",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "4G"
                        }
                    ]
                }
            ]
        },
        {
            "packageCode": "PZ6R8ASH9",
            "slug": "EU-30_2_Daily",
            "name": "Europe(30+ areas) 2GB/Day",
            "price": 32000,
            "currencyCode": "USD",
            "volume": 2147483648,
            "smsStatus": 1,
            "dataType": 2,
            "unusedValidTime": 30,
            "duration": 1,
            "durationUnit": "DAY",
            "location": "NO,DE,BE,FI,PT,BG,DK,LT,LU,LV,HR,UA,FR,HU,SE,SI,SK,GB,IE,EE,CH,MT,IS,IT,GR,ES,AT,CY,CZ,PL,RO,LI,NL,TR",
            "description": "",
            "activeType": 2,
            "favorite": false,
            "retailPrice": 32000,
            "speed": "3G/4G",
            "ipExport": "Norway/NO",
            "supportTopUpType": 1,
            "locationNetworkList": [
                {
                    "locationName": "Iceland",
                    "locationLogo": "/img/flags/is.png",
                    "locationCode": "IS",
                    "operatorList": [
                        {
                            "operatorName": "Nova",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Síminn",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ireland",
                    "locationLogo": "/img/flags/ie.png",
                    "locationCode": "IE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Eir",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Italy",
                    "locationLogo": "/img/flags/it.png",
                    "locationCode": "IT",
                    "operatorList": [
                        {
                            "operatorName": "Iliad",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Latvia",
                    "locationLogo": "/img/flags/lv.png",
                    "locationCode": "LV",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "LMT",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bite",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Lithuania",
                    "locationLogo": "/img/flags/lt.png",
                    "locationCode": "LT",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "BITĖ",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Luxembourg",
                    "locationLogo": "/img/flags/lu.png",
                    "locationCode": "LU",
                    "operatorList": [
                        {
                            "operatorName": "POST",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tango",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Malta",
                    "locationLogo": "/img/flags/mt.png",
                    "locationCode": "MT",
                    "operatorList": [
                        {
                            "operatorName": "GO",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Melita",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Netherlands",
                    "locationLogo": "/img/flags/nl.png",
                    "locationCode": "NL",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "KPN",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Poland",
                    "locationLogo": "/img/flags/pl.png",
                    "locationCode": "PL",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Play",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Portugal",
                    "locationLogo": "/img/flags/pt.png",
                    "locationCode": "PT",
                    "operatorList": [
                        {
                            "operatorName": "NOS",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "MEO",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Romania",
                    "locationLogo": "/img/flags/ro.png",
                    "locationCode": "RO",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Digi.Mobil",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovakia",
                    "locationLogo": "/img/flags/sk.png",
                    "locationCode": "SK",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Slovenia",
                    "locationLogo": "/img/flags/si.png",
                    "locationCode": "SI",
                    "operatorList": [
                        {
                            "operatorName": "Mobitel",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telemach",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Spain",
                    "locationLogo": "/img/flags/es.png",
                    "locationCode": "ES",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Movistar",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Yoigo",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "Sweden",
                    "locationLogo": "/img/flags/se.png",
                    "locationCode": "SE",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Switzerland",
                    "locationLogo": "/img/flags/ch.png",
                    "locationCode": "CH",
                    "operatorList": [
                        {
                            "operatorName": "Sunrise",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Salt",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Ukraine",
                    "locationLogo": "/img/flags/ua.png",
                    "locationCode": "UA",
                    "operatorList": [
                        {
                            "operatorName": "lifecell",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Kyivstar",
                            "networkType": "4G"
                        }
                    ]
                },
                {
                    "locationName": "United Kingdom",
                    "locationLogo": "/img/flags/gb.png",
                    "locationCode": "GB",
                    "operatorList": [
                        {
                            "operatorName": "T-Mobile",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Liechtenstein",
                    "locationLogo": "/img/flags/li.png",
                    "locationCode": "LI",
                    "operatorList": [
                        {
                            "operatorName": "FL1",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "7acht",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Norway",
                    "locationLogo": "/img/flags/no.png",
                    "locationCode": "NO",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Austria",
                    "locationLogo": "/img/flags/at.png",
                    "locationCode": "AT",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Hutchison",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Belgium",
                    "locationLogo": "/img/flags/be.png",
                    "locationCode": "BE",
                    "operatorList": [
                        {
                            "operatorName": "Base",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Proximus",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Bulgaria",
                    "locationLogo": "/img/flags/bg.png",
                    "locationCode": "BG",
                    "operatorList": [
                        {
                            "operatorName": "A1",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Telenor",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Vivacom",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Croatia",
                    "locationLogo": "/img/flags/hr.png",
                    "locationCode": "HR",
                    "operatorList": [
                        {
                            "operatorName": "Tele2",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "A1",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Cyprus",
                    "locationLogo": "/img/flags/cy.png",
                    "locationCode": "CY",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "PrimeTel",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Epic",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Czech Republic",
                    "locationLogo": "/img/flags/cz.png",
                    "locationCode": "CZ",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Turkey",
                    "locationLogo": "/img/flags/tr.png",
                    "locationCode": "TR",
                    "operatorList": [
                        {
                            "operatorName": "Avea",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Turkcell",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Denmark",
                    "locationLogo": "/img/flags/dk.png",
                    "locationCode": "DK",
                    "operatorList": [
                        {
                            "operatorName": "3",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "TDC",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Estonia",
                    "locationLogo": "/img/flags/ee.png",
                    "locationCode": "EE",
                    "operatorList": [
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Tele2",
                            "networkType": "4G"
                        },
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Finland",
                    "locationLogo": "/img/flags/fi.png",
                    "locationCode": "FI",
                    "operatorList": [
                        {
                            "operatorName": "Elisa",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Telia / DNA",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "France",
                    "locationLogo": "/img/flags/fr.png",
                    "locationCode": "FR",
                    "operatorList": [
                        {
                            "operatorName": "Orange",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "SFR",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Bouygues",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Free Mobile",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Germany",
                    "locationLogo": "/img/flags/de.png",
                    "locationCode": "DE",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "O2",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Greece",
                    "locationLogo": "/img/flags/gr.png",
                    "locationCode": "GR",
                    "operatorList": [
                        {
                            "operatorName": "Vodafone",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Wind",
                            "networkType": "5G"
                        }
                    ]
                },
                {
                    "locationName": "Hungary",
                    "locationLogo": "/img/flags/hu.png",
                    "locationCode": "HU",
                    "operatorList": [
                        {
                            "operatorName": "Telenor Hungary",
                            "networkType": "5G"
                        },
                        {
                            "operatorName": "Vodafone",
                            "networkType": "4G"
                        }
                    ]
                }
            ]
        }
    ];

    try {
        const db = await initializeDatabase();
        const transaction = db.transaction('packages', 'readwrite');
        const store = transaction.objectStore('packages');

        // Add each package individually
        hardcodedPackages.forEach((pkg) => {
            store.put(pkg); // Use put to overwrite if the key exists
        });

        transaction.oncomplete = () => {
            console.log('Hardcoded package data stored successfully.');
        };

        transaction.onerror = (event) => {
            console.error('Failed to store package data:', event);
        };
    } catch (error) {
        console.error('Error accessing IndexedDB:', error);
    }
}

export async function getPackages(): Promise<Package[]> {
    const db = await initializeDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction('packages', 'readonly');
        const store = transaction.objectStore('packages');
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result as Package[]);
        request.onerror = () => reject(request.error);
    });
}

export async function addPackages(packages: Package[]): Promise<void> {
    try {
        const db = await initializeDatabase();
        const transaction = db.transaction('packages', 'readwrite');
        const store = transaction.objectStore('packages');

        // Add each package individually
        packages.forEach((pkg) => {
            store.put(pkg); // Use put to overwrite if the key exists
        });

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                console.log('Packages added successfully.');
                resolve();
            };

            transaction.onerror = (event) => {
                console.error('Failed to add packages:', event);
                reject(transaction.error);
            };
        });
    } catch (error) {
        console.error('Error adding packages to IndexedDB:', error);
        throw error; // Re-throw to handle the error in the calling function
    }
}

storeHardcodedPackageData().then(() => {
    console.log('Package data has been stored.');
});