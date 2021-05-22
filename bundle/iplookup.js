exports.show = (mode) => {

    const banner = require('./banner');
    console.clear();
    banner.show('pastel', 'IP Lookup');


    const ask = require('prompt-sync')();
    if (mode) {
        var search_ip = '';
    } else {
        var search_ip = banner.ask("Enter Victim IP");
    }


    const clr = require('colors');
    const redLine = (clr.brightRed.dim('\n==================================================='));
    const yellowLine = (clr.brightYellow.dim('\n==================================================='));

    function num(x) {
        return x.toString();
    }

    function bool(x) {
        if (x) {
            return 'Yes';
        } else {
            return 'No';
        }
    }

    const request = require('request');

    options = {
        "method": "GET",
        "url": `http://ip-api.com/json/${search_ip}?fields=status,message,continent,country,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
    }

    console.log('\nGettin IP info...\n');
    request(options, function (error, response) {


        if (!error && response.statusCode == 200) {

            var data = JSON.parse(response.body);

            if (data.status == 'success') {

                var ip_data = (`
            
IP                : ${data.query.green} ${redLine}
Continent         : ${data.continent.green} ${yellowLine}
Region Name       : ${data.regionName.green} ${redLine}          
City              : ${data.city.green} ${yellowLine}
District          : ${data.district.green} ${redLine}           
Zip Code          : ${data.zip.green} ${yellowLine}
Latitude          : ${num(data.lat).green} ${redLine}
Longitude         : ${num(data.lon).green} ${yellowLine}
Timezone          : ${data.timezone.green} ${redLine}
Currency          : ${data.currency.green} ${yellowLine}
ISP name          : ${data.isp.green} ${redLine}
Organization name : ${data.org.green} ${yellowLine}
AS Number         : ${data.as.green} ${redLine}
AS name           : ${data.asname.green} ${yellowLine}
Reverse DNS       : ${data.reverse.green} ${redLine}
Mobile Connection : ${bool(data.mobile).green} ${yellowLine}
VPN               : ${bool(data.proxy).green} ${redLine}
Hosting           : ${bool(data.hosting).green} ${yellowLine}
                `);

                console.log(clr.cyan(ip_data));


            } else {
                console.log(`\nUnable to Lookup ${data.query} because of ${data.message}.`.brightRed);
            }

        } else {
            console.log('\nSomething went wrong. Please try again after some time'.red);
        }
        require('./back').back();

    });

}