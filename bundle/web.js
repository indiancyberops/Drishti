//Drishti is written by 7ORP3DO
exports.head = () => {


    const banner = require('./banner');
    console.clear();
    banner.show('morning', 'HTTP Headers Detector');

    var website;
    website = banner.ask("Enter the Website");

    const clr = require('colors');
    const request = require('request');

    options = {
        "method": "GET",
        "url": `http://api.hackertarget.com/httpheaders/?q=${website}`
    }

    console.log("\nGetting Website's Headers...\n");

    request(options, function (error, response) {


        if (!error && response.statusCode == 200) {

            var str = response.body;

            var str = str.replace(/(?:\n\n)/g, '-----')
            var str = str.replace(/(?:\r\n|\r|\n)/g, ': ')
            var ary = str.split(": ")

            if ((ary[0]).includes('error check your')) {
                console.log("Error : ".brightRed + ary[0].brightYellow);
            } else {
                console.log("\nHeaders :".magenta.bold + "\n\n" + ary[0].cyan + '\n');
            }

            for (let i = 1; i < ary.length; i = i + 2) {

                if (ary[i + 1]) {
                    console.log(ary[i].cyan + ' : '.brightYellow + ary[i + 1].brightGreen);
                }
            }

        } else {
            console.log(clr.brightRed("Something Went Wrong!\n"));
        }

        require('./back').back();

    });


}





exports.port = () => {


    const banner = require('./banner');
    console.clear();
    banner.show('passion', 'Port Scanner');

    var website;
    website = banner.ask("Enter the Website");

    const clr = require('colors');
    const request = require('request');


    options = {
        "method": "GET",
        "url": `http://api.hackertarget.com/nmap/?q=${website}`
    }

    console.log("\nGenerating Nmap scan report...\n\n");

    request(options, function (error, response) {


        if (!error && response.statusCode == 200) {

            var str = response.body;
            console.log(str);

        } else {
            console.log(clr.brightRed("Something Went Wrong!\n"));
        }

        require('./back').back();

    });

}





exports.trace = () => {


    const banner = require('./banner');
    console.clear();
    banner.show('atlas', 'Traceroute');

    const website = banner.ask("Enter the Website");

    const clr = require('colors');
    const request = require('request');

    options = {
        "method": "GET",
        "url": `https://api.hackertarget.com/mtr/?q=${website}`
    }

    console.log("\nGenerating diagnostic report...\n");

    request(options, function (error, response) {


        if (!error && response.statusCode == 200) {

            var str = response.body;
            if (str.includes('error input invalid')) {
                console.log("Error : ".brightRed + 'Invalid input  - Enter IP or Hostname'.brightYellow);
            }
            console.log(str);

        } else {
            console.log(clr.brightRed("Something Went Wrong!\n"));
        }

        require('./back').back();

    });


}





exports.dns = () => {


    const banner = require('./banner');
    console.clear();
    banner.show('retro', 'DNS Lookup');

    var website;
    website = banner.ask("Enter the Website");

    const clr = require('colors');
    const request = require('request');

    options = {
        "method": "GET",
        "url": `http://api.hackertarget.com/dnslookup/?q=${website}`
    }

    console.log("\nGetting Website's DNS info...\n");

    request(options, function (error, response) {


        if (!error && response.statusCode == 200) {

            var str = response.body;

            if (str.includes('error input invalid')) {
                console.log("Error : ".brightRed + 'Invalid input  - Enter IP or Hostname'.brightYellow);
            }
            console.log(str);
            var str = str.replace(/(?:\n\n)/g, '-----')
            var str = str.replace(/(?:\r\n|\r|\n)/g, ' : ')
            var ary = str.split(" : ")





            for (let i = 0; i < ary.length; i = i + 2) {

                if (ary[i + 1]) {
                    console.log(ary[i].cyan + ' : '.brightYellow + ary[i + 1].brightGreen);
                }
            }

        } else {
            console.log(clr.brightRed("Something Went Wrong!\n"));
        }

        require('./back').back();

    });


}









exports.host = () => {


    const banner = require('./banner');
    console.clear();
    banner.show('rainbow', 'Host Search');

    const website = banner.ask("Enter the Website");

    const clr = require('colors');
    const request = require('request');

    options = {
        "method": "GET",
        "url": `https://api.hackertarget.com/hostsearch/?q=${website}`
    }


    console.log('');
    console.log("\nGetting Host Info...\n");

    request(options, function (error, response) {

        if (!error && response.statusCode == 200) {

            var str = response.body;
            if (str.includes('error input invalid')) {
                console.log("Error : ".brightRed + 'Invalid input  - Enter IP or Hostname'.brightYellow);
            }
            console.log(str);

        } else {
            console.log(clr.brightRed("Something Went Wrong!\n"));
        }


        require('./back').back();
    });


}









exports.rev = () => {


    const banner = require('./banner');
    console.clear();
    banner.show('retro', ' Reverse DNS lookup');

    const website = banner.ask("Enter a Website or IP");

    const clr = require('colors');
    const request = require('request');

    options = {
        "method": "GET",
        "url": `https://api.hackertarget.com/reverseiplookup/?q=${website}`
    }


    console.log('');
    console.log("\nGetting DNS Info...\n");

    request(options, function (error, response) {

        if (!error && response.statusCode == 200) {

            var str = response.body;
            var ary = str.split("\n");

            for (let i = 0; i < ary.length; i++) {
                console.log(`[`.blue + clr.brightYellow(i) + `] `.blue + ary[i].brightGreen);
            }

        } else {
            console.log(clr.brightRed("Something Went Wrong!\n"));
        }


        require('./back').back();
    });


}